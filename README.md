# saver-dash

Saver Dash is a financial management web application, including personal transaction tracking, earnings and expense analysis, and savings plans. Written in node.js with a python django backend.

## Features

- Transaction management
   - Create transactions for transfers, earnings, and expenses
   - Track transaction details such as date, amount, and description
   - Create your own personalized labels for transactions for easier filtering
   - Import payment invoices
   - Create recurring transactions (coming soon)

- Monthly earnings and expense analysis
   - Visualize your earning and expenses using interactive graphs and charts
   - Get a clear overview of your financial trends over time
   - Analyze your spending habits and identify areas for improvement

- Saving plans (coming soon)
   - Create personalized saving plans tailored to your specific goals
   - Set savings targets and monitor your progress
   - Get reminders and notifications to stay on track with your savings

- TBD
   - Report generation and advanced insights for better financial analysis
   - Budgeting tools to help you plan and manage your expenses effectively
   - Recurrent transactions to facilitate expenses that happen every month

## Usage

To deploy/test the application, run the below (on a windows machine, for example):

1. Clone the repository:

   ```bash
   git clone https://github.com/michemcc/saver-dash.git
   ```

2. Create a virtual env, install requirements and migrate db:

   ```bash
   python -m venv venv
   venv\Scripts\activate.bat
   python -m pip install --upgrade pip
   cd backend
   pip install -r backend\requirements.txt
   # Generate a secret key
   python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
   python manage.py migrate

3. Run the django backend server
   ```bash
   python manage.py runserver
   ```

4. Install dependencies for the react frontend:

   ```bash
   cd ..
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

Once the application is running, access frontend by navigating to `http://localhost:5173` in your browser.

## React/typescript/vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Expanding the ESLint configuration:

- If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```bash
   Michael McCarthy <michemcc@outlook.com>
   https://www.linkedin.com/in/michemcc/
```