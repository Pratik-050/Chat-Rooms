interface AuthUser {
  id: number;
  name: string;
  email: string;
}

declare namespace Express {
  interface Request {
    user?: AuthUser; // Optional user object for authenticated requests
  }
}
