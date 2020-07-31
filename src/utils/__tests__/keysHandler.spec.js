import {
  keysHandler
} from "../index";

describe("utils/keysHandler", () => {
  it("Check if function 'privateKeyFromPem' get the private key from PEM string, function 'publicKeyFromPrivate` derives the public key, and finally function 'publicKeyToPem' returns the public PEM key", () => {
    const privatePemKey = `-----BEGIN PRIVATE KEY-----
    MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDFjmVaDDFB5cxg
    uCRgC8NecsYXe6RZMaApYR1j4ML/72Mj+df8cXmGLcexnQXH8DLAl8m6dJoGTs2P
    QLGmsVDqqHT6Fo/GQIE8vpsQnJBMVTkxs4S0uM2S4b1vYQhcPY/FVm/WdjFWiHS4
    p7PiXcIdOyvdPyUKlSY4f/Y6lEoJvxOoXE11VxspVN60Szsu1ZN0+lsr5m0PKUO1
    bI+KqzeYTHgo3qxs+Iy8oI+XpFL/wHAU0UsdWDNdnmPQkSRRSCd2u4Hfz7P8+xHl
    vuhTE2arJOkUsHJK9rvUq9j++emVYfMJv9wwgJO9v5UW13/jv+qc0d2n1Wnznrs/
    3nCoN0RzAgMBAAECggEBALRDMofwCCIxJUQ7wjVBhotv/wD+eQBKH/KiAsdYF5ah
    QL1bBJH8mP6uV0DiHpxJuIWz+wZ/zutijH7icTfBJCx6egKZA6fKxCJBagzGT4TX
    XtDTFYwx9KLKCKjQyWghZEaUkIgIYQyshpTXsXQkSTOTAntnWs1FOxLi8DKTjNtG
    PFvlZT6Id+79+eBKfTUwUOCFu5vLwgr9rYFSMhD5B376D/FYI35Ev8duxP9ERWhh
    icU0G60YaWc/OzOHD0LB6LwjJfdwDbYowPFSO/ewtmWSxPF3jv51nQbxzNAFy9bs
    bhHNMeCXJQ4Nzssc3tUv0nt+L1YFGk8E8CcbCg3zvIECgYEA6av3PddOL+CIQjoi
    3nh9VDl6pTCt3qhgFtJY5Zz7E+kwA3L4kNWMaU/TzXuHGY3zraVeYen2SQyNgLpB
    i11S38eIKajfOP/kzLge28JcGnpOQR9//2+H29TXz0q7KUW7i5zCiRO5ckAC+ZIm
    iLOXRB9gtf4IyIBGydJvYkXO/DkCgYEA2G76t7iwbhyyi5D7Z+mfsg+H8mMqLnrJ
    nlGpylAi5pYjWCIwZ3Tdm9I/Q0y9e454MXiaHtyDanAgL2m6Z0lMQPIsCnYz9c7K
    e//kJQtEit77ZJMnVjwYE7GLJKYoghAwMc0+ykTX0cZlzbihCDwMZchFGb2k1Wus
    4WHg9Vhh3gsCgYBoZOKFZ05QB3D4nX58g7oCSdeoO1JCWljreTgsBPELGS/RKqkw
    E6eyWO6YK6rU2N1X47yB5AOa6RfCvfOQbrYascr8SazIi1JNv6hRp8h8L84MPCV0
    GgDJTpLH0mxBaRz7p6IlmYFNMJnjo87BXfKjhZ0wUXjdEqoNeo02i1eIyQKBgQCs
    u2W9Wtj0CFM2r+71b67UHTEScbIohjaC9AnePTadcRWkMSUQbGSxB4sV2xkekwW5
    9daK6tK3D+Wf8XGjHQyOiLg9YTj25KMVc5RRPDzn2C4qhobOfAd7MCcsiK+rnd/Y
    30VNiMP117FIDiH2wHXkhYEgmgoDinvfJI61QGRbIQKBgQDFbW+k0vWP1KTF89PV
    dPHjViauKs/yXHy+eieI3zNKjZ5qJ/A0Y1uIPJaBNeyIyX5aF+2XFsBIWfvenMqM
    GFxIUQThHQNq2f69bzQoaDHn7e4GDeiUkded3Slt9wPXn+wffios21CKk+GKMlTH
    2mUyCJOPPuIVxQxAJf3G6tR56g==
    -----END PRIVATE KEY-----`;

    const expectedKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxY5lWgwxQeXMYLgkYAvDXnLGF3ukWTGgKWEdY+DC/+9jI/nX/HF5hi3HsZ0Fx/AywJfJunSaBk7Nj0CxprFQ6qh0+haPxkCBPL6bEJyQTFU5MbOEtLjNkuG9b2EIXD2PxVZv1nYxVoh0uKez4l3CHTsr3T8lCpUmOH/2OpRKCb8TqFxNdVcbKVTetEs7LtWTdPpbK+ZtDylDtWyPiqs3mEx4KN6sbPiMvKCPl6RS/8BwFNFLHVgzXZ5j0JEkUUgndruB38+z/PsR5b7oUxNmqyTpFLBySva71KvY/vnplWHzCb/cMICTvb+VFtd/47/qnNHdp9Vp8567P95wqDdEcwIDAQAB-----END PUBLIC KEY-----";

    const priKey = keysHandler.privateKeyFromPem(privatePemKey);
    const pubKey = keysHandler.publicKeyFromPrivate(priKey);
    const publicPemKey = keysHandler.publicKeyToPem(pubKey);

    const oneLinePublicPemKey = publicPemKey.replace(/(\r\n|\n|\r)/gm, "");

    expect(oneLinePublicPemKey).toBe(expectedKey);
  });
});