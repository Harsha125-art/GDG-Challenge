🚀 GDG Challenge Project

📌 Project Overview

The GDG Challenge Project is a cyberpunk-inspired interactive web experience that immerses users into a futuristic digital interface.
It demonstrates:

Typing effects (simulating hacker-style terminals)

Matrix-style visuals

Hidden puzzle with secret key mechanism

This project was created as part of the Google Developer Group (GDG) Challenge submission.

## 🏗️ Technical Architecture
The project follows a **frontend-focused architecture** with clean separation of concerns:

- **Frontend:** React.js, TailwindCSS  
- **Animations:** Framer Motion, custom CSS, JavaScript typing effect  
- **Assets:** Background images, ASCII text art, cyberpunk-style fonts  

---

## 🎥 Demonstration Video
👉 [Watch the Demo (YouTube Link)](https://youtu.be/VA00sI5D-h8?si=_dXgsfmTYGmOSyb_)  

---

## 📸 Screenshots & GIFs
| Cyberpunk Welcome Screen | Matrix Animation | ASCII Art Banner |
|--------------------------|------------------|------------------|
| ![Screenshot 1](https://github.com/Harsha125-art/GDG-Challenge/blob/489d9f340244aa59941fe532aab41526c1d2ec13/Login_page.png) | 
![Screenshot 2](https://github.com/Harsha125-art/GDG-Challenge/blob/489d9f340244aa59941fe532aab41526c1d2ec13/Home_Page.png) | 
![Screenshot 3](https://github.com/Harsha125-art/GDG-Challenge/blob/489d9f340244aa59941fe532aab41526c1d2ec13/Final_step_Page.png) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Harsha125-art/GDG-Challenge.git
cd GDG-Challenge
npm install
npm start
npm run build

🔑 Secret Key Implementation (Puzzle Walkthrough)
<details> <summary>🕵️ Step 1: Login & Cookie Generation</summary>

The user must first log in to access the puzzle.

Once logged in, a cookie is generated that grants access to the secret-key journey.

</details> <details> <summary>🕵️ Step 2: Part 1 Key (Hidden on Welcome Page)</summary>

On the Welcome Screen, a Part 1 Key is hidden.

It becomes visible only when hovered with the mouse.

A small hint is provided to inspect the page.  **spolier- the secret key is at right top 

</details> <details> <summary>🕵️ Step 3: Inspecting Page & Puzzle Clue</summary>

**spoiler - By inspecting the page elements, the user finds a hidden comment containing a puzzle.

The puzzle reveals a page address (API endpoint).

That page is only accessible if logged in.

</details> <details> <summary>🕵️ Step 4: Part 2 Key (API Page)</summary>

On the hidden API-based page, the Part 2 Key is revealed.

However, the page also contains a hidden button. 

</details> <details> <summary>🕵️ Step 5: Hidden Button Discovery</summary>

The hidden button is not visibly displayed.

**spoiler - The mouse pointer changes into a hand symbol only when hovering over it.

Clicking this button directs the user to the final page.

</details> <details> <summary>🕵️ Step 6: Submitting the Final Key</summary>

On the final page, the user must enter the complete key (Part 1 + Part 2).

If correct, a Congratulations message is displayed 🎉

</details>

🛠️ Technology Stack

Frontend: React.js, TailwindCSS

Animations: Framer Motion, custom CSS

Effects: JavaScript typing animations, Canvas-based Matrix grid effect

Version Control: Git & GitHub (PR-based workflow)

Challenge Uniqueness

Cyberpunk-styled futuristic UI

Interactive hidden puzzle mechanics

Engages users beyond visuals — requires curiosity, observation, and exploration
