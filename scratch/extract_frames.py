import cv2
import os

video_path = "D:/hero section rec.mp4"
output_dir = "C:/Users/Sanika/.gemini/antigravity/brain/fdb24a42-2555-46f0-83c1-1807c7309212"

cap = cv2.VideoCapture(video_path)
if not cap.isOpened():
    print("Error: Could not open video file.")
    exit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
duration = total_frames / fps
print(f"Total frames: {total_frames}, FPS: {fps}, Duration: {duration:.2f} seconds")

# Extract 6 frames evenly distributed across the video
intervals = [0, int(total_frames * 0.2), int(total_frames * 0.4), int(total_frames * 0.6), int(total_frames * 0.8), total_frames - 1]

for i, frame_idx in enumerate(intervals):
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
    ret, frame = cap.read()
    if ret:
        output_path = os.path.join(output_dir, f"ref_frame_{i}.png")
        cv2.imwrite(output_path, frame)
        print(f"Saved frame {i} (index {frame_idx}) to {output_path}")
    else:
        print(f"Error: Could not read frame at index {frame_idx}")

cap.release()
print("Done extracting frames!")
