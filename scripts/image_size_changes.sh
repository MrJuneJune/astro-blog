for img in *.webp; do
    ffmpeg -i "$img" -vf scale=720:720 "${img%.webp}_temp.webp" && mv "${img%.webp}_temp.webp" "$img"
done

