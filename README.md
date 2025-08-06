# Zerthos Project

Welcome to Zerthos! A modern React application built with cutting-edge technology and innovative design. This project showcases a professional website with multiple pages including Home, Industries, Technology, Leadership, Careers, and Contact pages.

## 🚀 Features

- **Modern React 18** with Vite for fast development
- **Tailwind CSS** for responsive styling
- **Radix UI** components for accessible UI elements
- **React Router** for client-side routing
- **Shadcn UI** design system
- **Responsive Design** optimized for all devices
- **Performance Optimized** with lazy loading and intersection observers

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **[Node.js](https://nodejs.org/en/)** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

To check your Node.js version, run:
```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ZERTHOS_PROJECT
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- React 18.2.0
- Vite 6.0.4
- Tailwind CSS 3.4.16
- Radix UI components
- React Router DOM
- And other development dependencies

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at:
- **Local**: http://localhost:5173/
- **Network**: http://0.0.0.0:5173/ (accessible from other devices on your network)

### 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 📁 Project Structure

```
ZERTHOS_PROJECT/
├── src/
│   ├── components/ui/          # Reusable UI components
│   ├── screens/               # Page components
│   │   ├── Homepage/
│   │   ├── IndustriesPage/
│   │   ├── TechnologyPage/
│   │   ├── LeadershipPage/
│   │   ├── CareersPage/
│   │   └── ContactPage/
│   ├── assets/                # Images, videos, and static files
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── index.html                 # Entry point
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🎨 Available Pages

- **Homepage** (`/`) - Main landing page
- **Industries** (`/industries`) - Industry solutions
- **Technology** (`/technology`) - Technology showcase
- **Leadership** (`/leadership`) - Team and leadership
- **Careers** (`/careers`) - Job opportunities
- **Contact** (`/contact`) - Contact information

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Key Technologies

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn UI
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 🚀 Deployment

The project is configured for easy deployment to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Static Hosting
```bash
npm run build
# Upload the contents of dist/ to your hosting provider
```

### AWS EC2 with PM2

To deploy on AWS EC2 using PM2 (no code changes required):

#### 1. Prepare Your EC2 Instance
```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install nginx (optional, for reverse proxy)
sudo apt install nginx -y
```

#### 2. Deploy Your Application
```bash
# Clone your repository
git clone <your-repository-url>
cd ZERTHOS_PROJECT

# Install dependencies
npm install

# Build the application
npm run build

# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'zerthos-app',
    script: 'node_modules/.bin/vite',
    args: 'preview --port 3000 --host 0.0.0.0',
    cwd: './',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start the application with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

#### 3. Configure Nginx (Optional but Recommended)
```bash
# Create nginx configuration
sudo tee /etc/nginx/sites-available/zerthos << EOF
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
sudo ln -s /etc/nginx/sites-available/zerthos /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 4. PM2 Management Commands
```bash
# View running processes
pm2 list

# Monitor processes
pm2 monit

# View logs
pm2 logs zerthos-app

# Restart application
pm2 restart zerthos-app

# Stop application
pm2 stop zerthos-app

# Delete application from PM2
pm2 delete zerthos-app
```

#### 5. Security Considerations
```bash
# Configure firewall (if using UFW)
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable

# Install SSL certificate (recommended)
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Verify Node.js version compatibility
4. Clear npm cache: `npm cache clean --force`

For additional support, please contact the development team.
