# Digits

<img src="doc/landing-page.png">

Digits is a contact management application built with Next.js, React Bootstrap, Prisma, PostgreSQL, and NextAuth. Users can sign in, add contacts, edit contacts, and add timestamped notes to each contact. Administrators can view all contacts and their associated notes from the admin page.

## Installation

First, install PostgreSQL and create a database:

createdb digits

If createdb is not available, use pgAdmin.

Second, clone your repo and open it in VSCode.

Third, install dependencies:

npm install

Fourth, create a .env file:

DATABASE_URL="postgresql://postgres:YOURPASSWORD@localhost:5432/digits?schema=public"
AUTH_SECRET="your-secret"
NEXTAUTH_SECRET="your-secret"

Fifth, run migrations:

npx prisma migrate dev

Sixth, generate Prisma client:

npx prisma generate

Seventh, seed database:

npm run seed

Finally, run the app:

npm run dev

Open:
http://localhost:3000

## Default Accounts

admin@foo.com / changeme  
john@foo.com / changeme

## Application Walkthrough

### Landing Page
Entry page of the app.

### Sign In Page
Login for existing users.

### Sign Up Page
Register a new account.

### Add Contact Page
Create a contact with:
- first name
- last name
- address
- image URL
- description

### List Contacts Page
Shows user’s contacts with:
- image
- name
- address
- description
- notes
- edit option

### Edit Contact Page
Update existing contact info.

### Notes
Each contact supports timestamped notes:
- text
- contactId
- owner
- createdAt

### Admin Page
Admins can see all contacts and notes.

## Authentication and Authorization

users manage their own contacts  
admins can view everything

## Directory Structure

.github
config
doc
prisma
public
src
tests
index.md
package.json

## Database Design

### User
id  
email  
password  
role  

### Contact
id  
firstName  
lastName  
address  
image  
description  
owner  

### Note
id  
contactId  
note  
owner  
createdAt  

## ESLint

npm run lint

## Playwright Testing

npx playwright test

## Build

npm run build
npm start

## GitHub Pages

This file is used as the published project homepage.
