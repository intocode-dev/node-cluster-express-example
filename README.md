# Node cluster + Express example

## Prerequisite for load testing
* Python and Locust installed
~~~
pip install locustio
~~~

## Installation
* Clone this project
~~~
git clone git@github.com:intocode-io/node-cluster-express-example.git
~~~
* Install node modules in the project directory
~~~
cd node-cluster-express-example
npm install
~~~

## Usage

To start a web server in Single-thread mode
~~~
node without-cluster.js
~~~

To start a web server in Cluster mode
~~~
node with-cluster.js
~~~

To start load testing web GUI
~~~
./load-test.sh
~~~
