# 🚀 AI Expense Chat Server - Deployment Guide

This repository contains the Helm chart for the AI Expense Chat Server. The chart is hosted as an OCI artifact in the GitHub Container Registry (GHCR).

# ⚡ Quick-start: 

Deploying the AI Expense Server via Helm OCI and Gateway API.

## 📋 Prerequisites
- Kubernetes Cluster (k3d, Minikube, or Cloud) 

- Helm 3.8+ (Required for OCI support)

- Traefik v3+ installed with Gateway API support enabled.

## 💁 Use Me!

If you want all these prerequisites pre-configured on your github codespace! then use one of my 'cluster on demand' setup, you'll be ready in no time (no separate setup required)!
- [k3d-cluster-on-demand](https://github.com/VinZCodz/k3d-cluster-on-demand)

-OR-

-  [minikube-cluster-on-demand](https://github.com/VinZCodz/minikube-cluster-on-demand)


## 1️⃣ Setup Namespace & Secrets
Now, on your cluster. 

Create the namespace and inject the sensitive credentials before installing the chart.

```
kubectl create namespace ai-expense-chat-app

# Create a file named .secrets.env and add below secrets
# MODEL="your_Groq_chat_model_name" 
# GROQ_API_KEY="your_key" 
# TURSO_DATABASE_URL="your_url" 
# TURSO_AUTH_TOKEN="your_token" 
# TURSO_RO_AUTH_TOKEN="your_readonly_token

# Create secret with the exact name referenced in chart values
kubectl create secret generic ai-expense-chat-secrets \
    --namespace ai-expense-chat-app \
    --from-env-file=.secrets.env
```

## 2️⃣ Deploy
Run the installation using the Gateway API settings. 

```
helm upgrade --install prod-backend-app oci://ghcr.io/vinzcodz/charts/ai-expense-chat-server \
  --version <version number> \
  --namespace ai-expense-chat-app \
  --set existingSecretName="ai-expense-chat-secrets" \
  --set httpRoute.enabled=true \
  --set httpRoute.hostnames[0]="*.app.github.dev" \
  --set httpRoute.hostnames[1]="localhost" \
  --set httpRoute.parentRefs[0].name="vinzcodz-gateway" \
  --set httpRoute.parentRefs[0].namespace="kube-system"

#Important: verify the image Digest sha256!
```

## 3️⃣ Verification & Health Checks
- Check A: Is the traffic route accepted?
```
kubectl describe httproute prod-backend-app-ai-expense-chat-server -n ai-expense-chat-app
```
Status should show ```Reason: Accepted``` and ```Status: True```

- Check B: Check connectivity by hitting the endpoint with port shows: ```Welcome to Expense Agent endpoints!```

## SRE Notes:

- Port Alignment: The 8080 port in your Codespace maps to the Traefik LoadBalancer, which the HTTPRoute then maps to your service on port 3001.

- Traefik v3: Ensure Traefik is started with  ```--set providers.kubernetesGateway.enabled=true``` to recognize the HTTPRoute resource.