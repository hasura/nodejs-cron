From node:8

WORKDIR /src

ADD src/package.json /src/

# Install node dependencies
RUN npm install

# Add source files
ADD src /src

CMD ["node", "server.js"]