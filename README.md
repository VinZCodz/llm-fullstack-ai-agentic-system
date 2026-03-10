# Full Stack AI Agentic Application.

### Stack

UI | UX Client Stack:
- NextJS React UI
- Generative UI with Shadcn Graph
- Premium UI with full blown chat features (Autoscroll, Resize, Reset chat, Scroll top/down etc..)

AI Agent | Backend Server Stack:
- LangGraph
- Groq Cloud LLMs
- Server Sent Events
- Express, Typescript, Bun

DB Stack:
- Turso DB cloud
- SQLLite node offering for integration tests
- Drizzle Micro-ORM
- DB first approach with separate DB for test and prod. 

Backend Test Suite Stack:
- Vitest integration suite for AI tool
- LLM-as-Judge eval for AI Graph
- TDD Methodology 
- DB Infrastructure tests

Devops | IaC Stack: 
- Docker:

    - Docker (with multistage build and low-bloat)
    - Github Actions Image package CI/CD 
    - Github Container Registry (GHCR.io) for distribution 
    - Vercel Hosting and Automated CI/CD for frontend Next.js stack

- K8s & Helm:
    - Package Server Express backend into k8s Helm chart.
    - Github Actions OCI Helm Chart package CI/CD 
    - Github Container/OCI Registry (GHCR.io) for Helm chart distribution
    - Self hosted K3d | Minikube Cluster
    - Gateway API via Traefik for North South comms.

[![Build and Push Docker Image](https://github.com/VinZCodz/llm-generative-ui/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/VinZCodz/llm-generative-ui/actions/workflows/docker-publish.yml)

### Open Source Contributions
- [ai-agentic-chat-ui-vinzcodz](https://github.com/VinZCodz/ai-agentic-chat-ui-vinzcodz): A ready made UI template used for AI Agentic chats, built on NextJS client side framework. Plug your backend services to stream.
- [k3d-cluster-on-demand](https://github.com/VinZCodz/k3d-cluster-on-demand): Instant 3-Node K3d cluster + Gateway API + Headlamp GUI on GitHub Codespaces! One-click Kubernetes Multi-Node environment with Traefik v3, Gateway API, and Metrics Server pre-configured.
- [minikube-cluster-on-demand](https://github.com/VinZCodz/minikube-cluster-on-demand): Instant Minikube + Gateway API + GUI on GitHub Codespaces. One-click Kubernetes environment with Traefik v3, Gateway API, and Metrics Server pre-configured.


<Add Frontend chat windows>

<Add Graph State>

<Some description>