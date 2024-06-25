# Sử dụng image Nginx chính thức từ Docker Hub
FROM nginx:alpine

# Copy các tệp HTML, CSS và JavaScript vào thư mục gốc của Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80 để truy cập trang web
EXPOSE 80
