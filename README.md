# password_vault
 
#### Technologies

- [ ] Fastify
- [ ] Typescript
- [ ] Next.js
- [ ] Chakara UI
- [ ] MongoDB

#### Algorithms used
- [ ] SHA256
- [ ] Argon2
- [ ] pbkdf2
- [ ] AES256

## Register

```mermaid
flowchart LR
    id1(Client - Hashed Password with SHA256) --> id2(Server - Hashed password with Argon2 / Create User / Create salt for vault / Create Vault)
```

## Login
```mermaid
flowchart LR
    id1(Client - Hashed Password with SHA256) --> id2(Server - Find User / Find Vault / Sign JWT / Send back encrypted vault, vault salt, user and JWT)
```

