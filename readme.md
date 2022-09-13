# LiveTutor

## This version of livetutor contains both frontend and backend files

## Backend: Django

### Project Setup:

- Install python=>3.7
- Install Pip typing `py -m ensurepip` in terminal or install directly from https://pypi.org/project/pip/
- `pip install -r requirements.txt ` to install required packages.
- copy '.env.example' to '.env'
- `py manage.py runserver` to run the app
- go to `localhost:8000`
-

## Frontend: Vue.js

### Project Setup:

- ensure npm is installed.
- `cd frontend` from the project root i.e: 'user/livetutor'
- npm i to install packages
- run npm run serve to compile vue for development. Backend is configured such way that it will automatically use the new resources. However a hard reload `ctrl+f5` might be necessary.
