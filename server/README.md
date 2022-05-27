# Superdesk Server config

Add these to your environment (eg. in `.env` file when using honcho):

    SUPERDESK_RELOAD=1  # reload on code change
    WEB_CONCURRENCY=3  # limit number of web workers

    # imatrics config
    IMATRICS_BASE_URL=http://example.com
    IMATRICS_USER=foo
    IMATRICS_KEY=password
