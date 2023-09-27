FROM quay.io/hermit/hermit-ser:latest

RUN git clone https://github.com/DilnethuR/HERMIT-MD_V2 /root/DilnethuR
WORKDIR /root/DilnethuR/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
