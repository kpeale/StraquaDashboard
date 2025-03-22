# Next.js 15 Template

A scalable and well-structured **Next.js 15** template with the following technologies:

- **App Router & `src/` Directory**
- **Authentication**: NextAuth.js (GitHub OAuth)
- **UI Components**: ShadCN + Tailwind CSS
- **Data Fetching**: TanStack Query
- **Forms**: TanStack Form (pending)
- **Internationalization (i18n)**: (pending)

## 🚀 Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/Allin-Technologies/nextjs-15-app-template.git
cd nextjs-15-app-template
```

### 2. Install dependencies
```zsh
bun install  # or yarn/npm
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add:
```env
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret

NEXT_PUBLIC_APP_NAME="Next.js 15 template"

AUTH_SECRET=your_secret
```

### 4. Run the development server
```zsh
bun dev  # or bun devsafe
```

The app should be available at `http://localhost:3000`

---

## 📂 Folder Structure
```
/your-repo
│── public/             # Static assets
│── src/
│   ├── app/            # Next.js app router
│   ├── components/     # UI components (ShadCN)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Config files, utils
│   ├── providers/      # Context & Providers
│   ├── services/       # API service calls
│   ├── stores/         # State management (if needed)
│   ├── styles/         # Tailwind & Global styles
│   ├── types/          # TypeScript interfaces
│── .env                # Environment variables
│── next.config.mjs     # Next.js config
│── tailwind.config.ts  # Tailwind config
│── tsconfig.json       # TypeScript config
│── package.json        # Dependencies
│── README.md           # Documentation
```

---

## 🔐 Authentication
This template uses **NextAuth.js** with GitHub OAuth. To enable authentication:
1. Create a GitHub OAuth app [here](https://github.com/settings/developers)
2. Add your `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `.env`

Authentication is handled in `src/lib/auth.ts`.

---

## 📦 Dependencies
| Name                 | Description                |
|----------------------|----------------------------|
| `next-auth`         | Authentication with GitHub |
| `@tanstack/react-query` | Data fetching management |
| `@tanstack/react-form`  | Form handling            |
| `tailwindcss`       | Utility-first styling      |
| `shadcn/ui`         | UI components              |

---

## 🛠 Contributing
We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a new branch (`feature/your-feature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** the branch (`git push origin feature/your-feature`)
5. **Open a Pull Request**

### Coding Guidelines
- Follow the **Next.js App Router** structure
- Use **TypeScript** for type safety
- Use **ShadCN components** where possible
- Keep functions and components modular

---

## 🚀 Deployment
To deploy, use **Vercel**:
```sh
vercel deploy
```
Or manually build:
```sh
pnpm build
```

---

## 📄 License
This project is licensed under the **MIT License**.

---

## ⭐ Acknowledgements
- Next.js Team
- TanStack Query/Form
- ShadCN UI

If you find this useful, give us a ⭐ on [GitHub](https://github.com/your-org/nextjs-template)! 🚀

