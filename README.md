demo video link-https://drive.google.com/file/d/1Ktys1p1xZgOH-v_Ym0MJraTBwo3VGRoO/view?usp=sharing 
presentation link-https://www.canva.com/design/DAGl8HT-Mcw/S3Lm8nsCaq5jZsJUfII4bA/edit?utm_content=DAGl8HT-Mcw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
This full stack application consists of a homepage, a publications page, achievements page and collaboration page.
Feaures
- Backend API with Sequelize ORM
- PostgreSQL database hosted on NeonDB
- Viewing reasearch papers
  Technologies Used

### Frontend
- [Vite](https://vitejs.dev/)
- React 19
- Axios
- React Router

### Backend
- Express.js
- Sequelize ORM
- PostgreSQL (NeonDB)
- dotenv

## 📦 Setup Instructions

 1. Clone the repository

git clone https://github.com/ziya1122/publications.git
cd publications

2. Setup Backend from research-paper-repo
cd backend
npm install

3.Create an .env file
DATABASE_NAME=neondb
DATABASE_USER=neondb_owner
DATABASE_PASSWORD=your_password
DATABASE_HOST=your_host
DATABASE_PORT=5432
SSL_MODE=require
PORT=5000

4. start the server with node server.js

5.Setup frontend from fullstack->college-website
cd frontend
npm install
npm run dev

