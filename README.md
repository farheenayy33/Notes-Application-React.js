
# Notes-Application-React.js

A **simple and interactive Notes Application** built with React.js that allows users to **add, view, and delete notes**. The app uses **React hooks (`useState`)** to manage state and provides a clean, responsive UI.

![Notes App Screenshot](./src/assets/Notes.png)

---

## **Features**

* Add new notes with a **title** and **description**
* View all notes in a **responsive layout**
* Delete notes individually
* Simple, clean UI using **Tailwind CSS**
* State management handled with **React Hooks (`useState`)**

---

## **Technologies Used**

* React.js (Functional Components & Hooks)
* Tailwind CSS for styling
* React Icons for UI elements (`RxCrossCircled`)
* Local state management with `useState`

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/farheenayy33/Notes-Application-React.js.git
cd Notes-Application-React.js
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Run the application**

```bash
npm start
```

* Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## **How It Works**

1. Enter a note title and description in the form.
2. Click **Add Note** to save it.
3. Notes appear in the **Recent Notes** section.
4. Click the ❌ button (`RxCrossCircled`) to delete any note.

---

## **Folder Structure**

Notes-Application-React.js/
├─ src/
│  ├─ assets/        # Images like Notes.png
│  ├─ App.js         # Main React component
│  └─ index.js       # Entry point
├─ package.json
└─ README.md

---

## **Future Improvements**

* Save notes to **localStorage** to persist data between sessions
* Add **edit functionality** for notes
* Integrate **dark mode**
* Add **tags or categories** for notes
