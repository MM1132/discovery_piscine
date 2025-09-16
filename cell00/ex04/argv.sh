for i in "$1" "$2" "$3"
do
	if [ -n "$i" ]; then
		echo "$i"
	fi
done
