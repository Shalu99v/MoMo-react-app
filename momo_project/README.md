# MoMo React App

MoMo is a motivational app designed to inspire users and help them combat procrastination. The app encourages users to start their day with productivity and energy, featuring motivational quotes, productivity tips, and a call-to-action for trying out productivity tools.

---

## Features

- **Motivational Quotes**: Displays inspiring messages to encourage productivity.
- **Procrastination Awareness**: Lists common barriers to productivity like hitting snooze, endless procrastination, and missing goals.
- **Positive Reinforcement**: Highlights solutions to overcome procrastination with tick icons representing good habits.
- **Clean, User-Friendly Design**: Features a clean layout, easy-to-read typography, and minimalist illustrations.

---

## Technologies Used

- **React.js**: Front-end framework for building the user interface.
- **CSS (with Modular CSS for component-based styling)**: Styling for components to ensure a scalable, maintainable layout.
- **React Icons**: Custom icons used for displaying positive and negative markers (e.g., tick and close icons).
- **GIMP**: Used for image manipulation (e.g., editing logos and backgrounds).
  
---

## Approach

### Project Breakdown:
1. **User Interface**: The UI includes:
   - A motivational section with quotes and actions to help users overcome procrastination.
   - A section showing positive actions (e.g., ticking off procrastination behaviors) and inspiring users to adopt new habits.
   - Clear CTAs (Call-To-Action) like "Start Your Free Trial" to motivate users further.
   
2. **Components**: Components are organized for reusability and maintainability:
   - `BenefitsSection`: The core section displaying motivational content and user interaction buttons.
   - `CloseIcon`, `TickIcon`: Reusable components for icons.
   - The app makes use of CSS modules for scoped styling, ensuring styles are specific to each component.

3. **State Management**: Simple state management using React hooks to manage component states. (No external state management libraries are used in this app.)

---

## Setup Instructions

### Prerequisites

Make sure you have **Node.js** installed. You can check this by running:
```bash
node -v

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Shalu99v/MoMo-react-app.git
   
2.Navigate to the project directory
3.Install dependencies
4.start the development server
