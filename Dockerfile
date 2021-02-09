FROM node:14-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY app /usr/src/app
RUN npm install
# Run the test app. No need to expose the port, it is done with docker-compose
CMD [ "node", "app.js" ]