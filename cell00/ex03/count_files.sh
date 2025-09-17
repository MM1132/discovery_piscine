ls -l | grep -v "^l" | wc -l | tr -d " " | awk '{print $1-1}'
