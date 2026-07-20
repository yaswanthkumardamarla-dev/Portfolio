#!/usr/bin/env bash
# Dev helpers for this project.
#
# Two ways to use:
#
#   1. Run directly (one-off):
#        ./scripts/dev-tools.sh 3000
#
#   2. Source it to get the `k` alias in your shell (bash or zsh):
#        source scripts/dev-tools.sh
#        k 3000
#
#    To have `k` available in every terminal, add this line to your
#    ~/.zshrc or ~/.bashrc (using the path where you cloned the repo):
#        source /path/to/portfolio/scripts/dev-tools.sh

kill_port() {
    if [ -z "$1" ]; then
        echo "Usage: k <port_number>"
        return 1
    fi

    PORT=$1
    PIDS=$(lsof -t -i:"$PORT")

    if [ -z "$PIDS" ]; then
        echo "No processes found running on port $PORT"
        return 0
    fi

    echo "Killing processes on port $PORT: $PIDS"
    kill -9 $PIDS
}

alias k='kill_port'

# When executed directly (not sourced), treat the argument as a port.
if [ "${BASH_SOURCE[0]}" = "$0" ]; then
    kill_port "$@"
fi
