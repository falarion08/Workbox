# Workbox - A project management software built using Flask backend framework.

Instructions on how to run the project. (Make sure python is installed) 
1) Open CLI, and do "pip install virtualenv"
2) Create a virtual machine locally via "virtualenv .venv" or "python -m virtualenv .venv"
3) After the installation run the virtual environment by entering in the CLI ".venv/Scripts/activate" (Assuming you're using Windows)
4) Install dependencies via "pip install -r requirements.txt"
4) Create a .env file in the base folder. Create a variable name, "DATABASE_URL" inside the .env file and enter your credentials that can be found on the ElephantSQL website with the format: "postgresql://username:password@hostname/databasename". DO NOT USE DIRECTLY THE LINK FROM ELEPHANTSQL.
5) Add .env, .venv,  __pychache__,node_mules,cert.pem,and key.pem files to .gitignore to protect your credentials
6) On a separate terminal, run tailwind CSS by entering the following "npm run dev"
7) Run the Flask web app by entering the command "python app.py"

**Notes:**

**Tutorial how to connect ElephantSQL in pgAdmin4**: https://www.elephantsql.com/docs/pgadmin.html

**Development Website URL**: https://0.0.0.0:5000/

**The website is live on:** https://workbox.onrender.com/
