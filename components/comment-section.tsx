"use client"

import { useState, useEffect } from "react"
import { Send, User, Clock } from "lucide-react"

type Comment = {
  id: string
  name: string
  email: string
  text: string
  timestamp: string
  artworkId: string
}

type CommentSectionProps = {
  artworkId: string
}

export function CommentSection({ artworkId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; text?: string }>({})

  useEffect(() => {
    // Load comments from localStorage
    const savedComments = localStorage.getItem("gallery-comments")
    if (savedComments) {
      const allComments: Comment[] = JSON.parse(savedComments)
      setComments(allComments.filter((c) => c.artworkId === artworkId))
    }
  }, [artworkId])

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { name?: string; email?: string; text?: string } = {}

    if (!name.trim()) {
      newErrors.name = "Имя обязательно"
    }

    if (!email.trim()) {
      newErrors.email = "Email обязателен"
    } else if (!validateEmail(email)) {
      newErrors.email = "Неверный формат email"
    }

    if (!text.trim()) {
      newErrors.text = "Комментарий не может быть пустым"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      text: text.trim(),
      timestamp: new Date().toISOString(),
      artworkId,
    }

    // Save to localStorage
    const savedComments = localStorage.getItem("gallery-comments")
    const allComments: Comment[] = savedComments ? JSON.parse(savedComments) : []
    allComments.push(newComment)
    localStorage.setItem("gallery-comments", JSON.stringify(allComments))

    // Update state
    setComments((prev) => [...prev, newComment])
    setName("")
    setEmail("")
    setText("")
    setErrors({})
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="border-b border-border p-4 md:p-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">
          Оставить комментарий
        </h3>
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Ваше имя *"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrors((prev) => ({ ...prev, name: undefined }))
              }}
              className={`w-full rounded-lg border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.name ? "border-destructive" : "border-border"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Ваш email *"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              className={`w-full rounded-lg border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.email ? "border-destructive" : "border-border"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Ваш комментарий *"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                setErrors((prev) => ({ ...prev, text: undefined }))
              }}
              rows={3}
              className={`w-full resize-none rounded-lg border bg-input px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.text ? "border-destructive" : "border-border"
              }`}
            />
            {errors.text && (
              <p className="mt-1 text-xs text-destructive">{errors.text}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
            Отправить
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">
          Комментарии ({comments.length})
        </h3>
        {comments.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">
            Пока нет комментариев. Будьте первым!
          </p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-lg border border-border bg-secondary/50 p-3"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-primary/20">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {comment.name}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatDate(comment.timestamp)}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground">{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
