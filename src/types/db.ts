export type DbCollections = {
  users: User
}

export type Role = "admin" | "editor" | "user"

export type User = {
  id: number
  name: string
  role: Role
}
