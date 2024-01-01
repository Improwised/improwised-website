module.exports = {
    ci: {
        assert: {
         "preset": "lighthouse:recommended",    
            assertions: {
                "offscreen-images": "off",  // audit will not check images which not visible to users.
                "uses-webp-images": "off",  // audit will not check webp images
                "first-contentful-paint": ["warn", {"maxNumericValue": 5000}],  // wait 5 seconds for render the first page
                "interactive": ["error", {"maxNumericValue": 7000, "aggregationMethod": "optimistic"}],  // wait 7 seconds for fully interactive
                "resource-summary:document:size": ["error", {"maxNumericValue": 14000}],  // if html doc size bigger than 14000 bytes give error
                "categories:performance": ['warn', { minScore: 0.7 }],  // if overall performance score below 0.7 gives warning
                "categories:accessibility": ['error', { minScore: 0.93 }]  // if accessibility is below 0.93 then gives error
            },
        },
        collect: {
            "numberOfRuns": 1,
            "chromePath": "/opt/hostedtoolcache/chromium/122.0.6218.0/x64/chrome",
            "url": [
                "https://www.improwised.com/"
                // "https://www.improwised.com/about-improwised/",
                // "https://www.improwised.com/case-studies/",
                // "https://www.improwised.com/contact/",
                // "https://www.improwised.com/careers/"
            ],
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'http://164.52.192.158:30011',
            basicAuth: {
                "username": "admin",
                "password": "3mKBVGgxk5XtHvbZee90"
            },
            token: '6e9f0e54-ffe3-41c7-8f2e-9d67719afb93', // build-token which use for add data on server
        },
    },
}
