# React + Vite

This project provides a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and some pre-configured ESLint rules. It serves as a quick and efficient starting point for building modern React applications.

## Features

- **Vite**: Fast and lightweight development server with optimized build.
- **React**: Popular JavaScript library for building user interfaces.
- **HMR**: Instant updates in the browser without losing the application state.
- **ESLint**: Ensures code quality and consistency.

## Plugins

Currently, two official plugins are available to integrate React with Vite:

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**
   - Uses [Babel](https://babeljs.io/) for Fast Refresh.
   - Suitable for projects requiring Babel-based transformations or customizations.

2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**
   - Uses [SWC](https://swc.rs/) for Fast Refresh.
   - Faster than Babel; ideal for large projects or developers prioritizing performance.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.18+ or 16+ recommended)
- npm or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server with Vite:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000` (or another port if 3000 is occupied).

### Building for Production

To create an optimized build for production:

```bash
npm run build
# or
yarn build
```

The output will be generated in the `dist` directory.

### Previewing the Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Managing README.md

### Adding README.md
To create a new `README.md` file, use the following command:

```bash
echo "# Project Title" > README.md
```

Then open the file in your preferred text editor and add the necessary content.

### Editing README.md
To edit an existing `README.md`, open it in a text editor, make your changes, and save the file:

```bash
nano README.md
# or
code README.md
```

### Deleting README.md
To delete the `README.md` file, run the following command:

```bash
rm README.md
```

## Bitrix24 CRM Functionality

### Managing Leads in Bitrix24

Bitrix24 CRM provides tools to manage leads efficiently. Here are the key functionalities:

#### Adding a Lead
1. Navigate to the CRM module in your Bitrix24 workspace.
2. Go to the **Leads** section.
3. Click on the **+ Add** button to create a new lead.
4. Fill in the required details like name, contact information, and source.
5. Save the lead.

#### Editing a Lead
1. Find the lead you want to edit in the Leads section.
2. Click on the lead to open its details.
3. Use the **Edit** button to update the lead's information.
4. Save the changes.

#### Deleting a Lead
1. Locate the lead you wish to delete in the Leads section.
2. Open the lead or use the action menu (three dots).
3. Select **Delete** and confirm the action.

These functions allow for streamlined lead management in Bitrix24 CRM, enabling better tracking and interaction with potential customers.

## ESLint Configuration

This project includes a basic ESLint setup to enforce coding standards and improve code quality. You can customize the rules by modifying the `.eslintrc` file.

Run the linter using:

```bash
npm run lint
# or
yarn lint
```

## Choosing a Plugin

Depending on your project's requirements, you can switch between the Babel-based plugin and the SWC-based plugin:

- Install the desired plugin:
  ```bash
  npm install @vitejs/plugin-react
  # or
  npm install @vitejs/plugin-react-swc
  ```

- Update the `vite.config.js` file to use the selected plugin.

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Vite Plugin React (Babel)](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [Vite Plugin React (SWC)](https://github.com/vitejs/vite-plugin-react-swc)
- [Bitrix24 Documentation](https://helpdesk.bitrix24.com/)

## License

This project is licensed under the MIT License. Feel free to use it as a template for your own projects.
