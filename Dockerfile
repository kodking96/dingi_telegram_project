FROM node:latest
WORKDIR /dingiswayo
COPY package.json /dingiswayo
RUN npm install
ADD . /dingiswayo
EXPOSE 5000
CMD ["npm", "start"]