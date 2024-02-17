# Project Architecture
1) Monolith Architecture - It is the architecture in which everything was written in a single repo like Frontend , backend , sms notification services etc
So this architecture is kind of old way of building products, because in this structure whenever there will be change in a small a minor changes also we need to build whole complete app and that is a kind of inefficient thing.

2) Microservices architecture - In this as the name suggest, we have different small services for different things like backend , frontend, sms notification , authentication etc , so all this small services can talk to each other according to the use cases.

# Why react application are faster?
Because react uses a algorithm named as React fibre. So react fibre is a new reconciliation algorithm that effectively do a comparison between new virtual dom and previous virtual dom and only the difference between both virtual dom is updated to actual dom.

Virtual dom is object representation of the JSX(Actual dom);

So whenever the state changes a new virtual dom is created with the latest data and react compare the two virtual dom with each other and with the help of reconciliation algo , it is able to effectively render the updated data to actual dom.