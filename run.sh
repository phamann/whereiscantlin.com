PORT=${PORT:-3367}

echo "Running on $PORT"
pushd dist
python -m SimpleHTTPServer $PORT
popd

