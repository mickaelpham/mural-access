# Mural Access

Defining relations at [Mural](https://mural.co) with
[OpenFGA](https://openfga.dev).

## Authorization Model

```
model
  schema 1.1

type user

type company
  relations
    define member: [user]

type group
  relations
    define member: [user]

type workspace
  relations
    define admin: [user, group#member]
    define member: [user, group#member, company#member]
    define guest: [user]
    define can_access: guest or member or admin
    define can_edit_settings: admin
```
