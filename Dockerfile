FROM droplr/serverless:nodejs8.10

COPY package.json .
COPY package-lock.json .

RUN npm install --production
COPY . .

CMD serverless
