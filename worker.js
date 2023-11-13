onmessage = (e) => {
    console.log("Message received from main script");
    /** @type {WebTransport} */
    let w = e.data


    console.log("Received WebTransport object: ", w);

    w.datagrams.writable.getWriter().write("Hello, World!");

    w.datagrams.readable.getReader().read().then(({ value, done }) => {
        console.log("Datagram received: ", value, done);
    });
};

