## What is Docker?
Docker is a **platform** for developing, shipping, and running applications inside **containers**. Containers package the application code and all its dependencies together, making them portable and consistent across different environments.

---

## Why Use Docker?

1. **Consistency**: Avoid "it works on my machine" issues. Containers run the same way on any system.
2. **Portability**: Easily move applications between different environments (local, dev, production).
3. **Scalability**: Quickly spin up or shut down containers to handle varying loads.
4. **Isolation**: Each container runs in its own environment, preventing conflicts.
5. **Efficiency**: Containers are lightweight compared to traditional virtual machines (VMs).

---

## Key Concepts

1. ### Containers
   - Containers are **lightweight, isolated environments** that package applications and their dependencies.
   - They run on the **host operating system** but are isolated from each other.
   - Think of them as **lightweight VMs** but without the overhead.

2. ### Images
   - An **image** is a **blueprint** for creating containers.
   - Images contain everything needed to run an application (code, libraries, dependencies).
   - You can download images from Docker Hub or create your own.

3. ### Dockerfile
   - A **Dockerfile** is a text file that contains instructions to build an image.
   - Example:
     ```dockerfile
     # Use an official Node.js runtime as a parent image
     FROM node:14

     # Set the working directory
     WORKDIR /app

     # Copy package files and install dependencies
     COPY package*.json ./
     RUN npm install

     # Copy the rest of the application code
     COPY . .

     # Define the command to run the app
     CMD ["node", "app.js"]
     ```

4. ### Layers
   - Images are built in **layers**, each representing a step in the Dockerfile.
   - Layers are **cached** to speed up builds. If a step doesn't change, Docker reuses the existing layer.

5. ### Volumes
   - **Volumes** store data outside of containers so it persists even if the container is deleted.
   - Useful for storing database data, logs, etc.

6. ### Networks
   - Docker containers can communicate with each other via **networks**.
   - Docker automatically manages networking, making it easy to connect containers.

7. ### Docker Compose
   - **Docker Compose** is a tool to define and run multi-container applications using a `docker-compose.yml` file.
   - Example `docker-compose.yml` for a web app with a database:
     ```yaml
     version: '3'
     services:
       web:
         image: my-web-app
         ports:
           - "8080:80"
       db:
         image: postgres
         environment:
           POSTGRES_PASSWORD: example
     ```

8. ### Docker CLI Commands
   - `docker build`: Build an image from a Dockerfile.
   - `docker run`: Run a container from an image.
   - `docker ps`: List running containers.
   - `docker stop`: Stop a running container.
   - `docker rm`: Remove a container.
   - `docker rmi`: Remove an image.
   - `docker pull`: Download an image from a registry.
   - `docker exec`: Run a command in a running container.

9. ### Docker Registry
   - A **Docker registry** is a storage system for Docker images (e.g., Docker Hub, GitHub Container Registry).

---

## How Docker Works Under the Hood

1. **Namespaces**:
   - Docker uses Linux **namespaces** to provide isolation for containers (processes, networks, etc.).

2. **Control Groups (cgroups)**:
   - **Cgroups** manage the resources (CPU, memory) available to containers.

3. **Union File Systems**:
   - Docker uses **UnionFS** (like AUFS, OverlayFS) to create layers in an image.

4. **Container Runtime**:
   - Docker uses a **container runtime** (like `containerd` or `runc`) to create and run containers.

---

## Next Steps to Learn Docker

1. **Install Docker**: [Docker Installation Guide](https://docs.docker.com/get-docker/)
2. **Try Basic Commands**:
   - Pull an image: `docker pull hello-world`
   - Run a container: `docker run hello-world`
3. **Create a Simple Dockerfile**.
4. **Explore Docker Compose** for multi-container setups.