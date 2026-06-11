export const articles = [
  {
    slug: 'what-is-lookout',
    title: 'What is Lookout?',
    category: 'Getting Started',
    lastUpdated: 'June 11, 2026',
    excerpt: 'An introduction to Lookout, the ultimate dual-camera recording app for creators.',
    overview: `Lookout is a native iOS application engineered specifically for content creators, mobile journalists, educators, and social media vloggers who require multi-perspective video recording. By leveraging the advanced multi-camera APIs built into modern Apple silicon, Lookout allows you to capture video streams from the front FaceTime/TrueDepth camera and the primary rear-facing camera array at the exact same time.

Traditionally, capturing two angles simultaneously required setting up two independent cameras, managing two sets of media cards, and executing a tedious post-production workflow to align, synchronize, and color-match the footage in editing suites like Final Cut Pro, Premiere, or DaVinci Resolve. Lookout entirely bypasses this complexity by compositing both camera streams in real-time on-device with zero processing latency. The result is a single, perfectly synchronized, production-grade video file saved directly to your native Photos library, ready for immediate sharing, uploading, or editing.

Lookout is built on a foundation of data privacy and efficiency. There are no cloud servers processing your feeds, no account registrations required, and no intrusive trackers. All video compositing is performed locally on your iPhone's GPU, ensuring your creative process remains completely secure and offline.`,
    steps: [
      'Download Lookout from the iOS App Store and open the application on your iPhone.',
      'Allow the required Camera and Microphone permissions when prompted by the system dialogs.',
      'Familiarize yourself with the interface: the viewport shows a real-time combined preview of both cameras.',
      'Use the bottom segmented control bar to choose between Split Screen (50/50 division) and Picture-in-Picture (inset window) modes.',
      'Tap the red Record button to start capturing. A duration timer and status indicator will appear at the top of the viewport.',
      'While recording, double-tap anywhere on the preview to swap which camera occupies the main background and which occupies the inset/split.',
      'Tap the square Stop button to finish. The finalized video file is exported immediately to your Photos app.'
    ],
    tips: [
      'Clean both the front TrueDepth lens and the rear camera lenses with a microfiber cloth before recording to ensure high clarity and reduce glare.',
      'Mount your iPhone on a stable grip, tripod, or gimbal to ensure smooth footage, particularly when recording active vlogs or interviews.',
      'Use Focus Mode (Stealth Screen) during long recording sessions to disable the screen preview, reducing heat and conserving up to 30% battery life.',
      'Check your iPhone storage capacity under Settings > General > iPhone Storage to ensure you have ample space for dual-stream high-definition video files.'
    ],
    troubleshooting: [
      'If you launch the app and see a black screen, verify that Lookout has been granted Camera permissions in the iOS Settings app.',
      'If one of the camera angles appears frozen or fails to load, force-close any other background apps (like Instagram, Zoom, or FaceTime) that may be holding system camera locks.',
      'For users experiencing low frame rates, ensure your phone is not in Low Power Mode, which limits GPU and CPU processing capabilities.'
    ],
    related: ['supported-devices', 'camera-permissions', 'first-recording-guide']
  },
  {
    slug: 'supported-devices',
    title: 'Supported Devices and Hardware Requirements',
    category: 'Getting Started',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Check the hardware and iOS version requirements for running Lookout dual capture.',
    overview: `Lookout dual-camera recording is an exceptionally resource-intensive task that pushes your iPhone's hardware to its limits. Capturing, processing, and encoding two separate high-resolution video streams simultaneously requires dedicated Image Signal Processors (ISPs) and Neural Engines found in modern Apple silicon.

To run Lookout, your iPhone must be equipped with an Apple A12 Bionic processor or newer, and must be running iOS 16.0 or later. While the software will run on older compatible models, optimal thermal performance, lower battery drain, and support for higher resolutions (such as 4K capture) are best achieved on newer iPhone lines.

Please note that older legacy devices (such as the iPhone X, iPhone 8, or older) do not possess the hardware multi-camera pipeline architecture required to capture multiple sensors at the same time and are therefore unsupported.`,
    steps: [
      'Verify your iPhone model: Navigate to Settings > General > About on your iPhone and check the Model Name.',
      'Verify your iOS version: In the same About menu, check the iOS Version. If it is below 16.0, update your software in Settings > General > Software Update.',
      'Check Apple Watch compatibility: Ensure your watch is a Series 4 or newer and is updated to watchOS 9.0 or later.',
      'Install the companion Watch app: Open the iOS Watch app on your iPhone, locate Lookout, and tap Install.'
    ],
    tips: [
      'Newer iPhones (iPhone 13 series and up) feature enhanced ISPs that allow the system to stay cool for longer durations during dual-camera capture.',
      'If you plan to use an external microphone, ensure it is certified for iOS (MFi) to guarantee correct audio routing through the lighting/USB-C ports.',
      'If using an Apple Watch, keeping Wi-Fi and Bluetooth enabled on both devices is essential for low-latency live preview streams.'
    ],
    troubleshooting: [
      'If the App Store shows "Not Compatible" for Lookout, your device does not meet the minimum processor (A12 Bionic) or iOS (16.0+) requirements.',
      'If the app runs but feels sluggish on older supported hardware (like the iPhone XR), close all background apps and lower the recording resolution to 1080p within Lookout settings.',
      'If you experience fast battery drain, this is normal behavior for multi-camera apps; consider using a portable battery pack for extended shoots.'
    ],
    related: ['what-is-lookout', 'troubleshooting-recording-issues']
  },
  {
    slug: 'split-screen-recording',
    title: 'How does Split Screen recording work?',
    category: 'Recording Modes',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Learn how to record using the side-by-side split layout, perfect for reactions and interviews.',
    overview: `Split Screen recording mode divides the video canvas directly down the center, allocating 50% of the frame to the front camera and 50% to the rear camera. This layout is the gold standard for reaction videos, side-by-side product walk-throughs, face-to-face interviews, and interactive vlogs where both the speaker and the environment are equally important to the narrative.

When you select Split Screen mode, Lookout utilizes hardware-level video compositing to align the two feeds side-by-side. The audio is captured from the primary selected microphone (usually the front microphone when vlogging) and remains perfectly synced with both video streams. 

Lookout automatically supports both Portrait and Landscape orientations in Split Screen mode. Holding the phone vertically splits the screen horizontally (top and bottom), while holding it horizontally splits it vertically (left and right), adapting dynamically to your filming preferences.`,
    steps: [
      'Launch Lookout on your iPhone and position the phone in your preferred orientation (Portrait or Landscape).',
      'Select "Split Screen" from the layout selector bar at the bottom of the camera interface.',
      'Verify your framing: adjust the physical position of the phone so that you are centered in the front-camera half and your subject is aligned in the rear-camera half.',
      'Tap the swap button (or double-tap the screen preview) to swap the relative positions of the camera feeds if desired.',
      'Tap the red Record button to begin capturing. You will see both feeds recording live on your screen.',
      'Tap the Stop button to finish. The merged video is written to the Photos app in your chosen aspect ratio.'
    ],
    tips: [
      'Since the viewport is split in half, subjects should remain closer to the center of their respective frames to prevent them from being cropped out of the final video.',
      'If filming a conversation, place the iPhone directly between both speakers on a tripod, and use landscape mode to give each speaker a clear, wide half of the frame.',
      'Avoid standing too close to the front camera; a distance of at least 2 to 3 feet ensures a natural focal length and flattering framing.'
    ],
    troubleshooting: [
      'If the split-screen boundary appears misaligned or glitchy, restart the app to let the iOS Metal graphic engine re-initialize the render canvas.',
      'If one half of the screen is dark, verify that your hand or phone case is not blocking the respective camera lens on the front or back of the iPhone.',
      'If the screen rotation fails to update, check that you do not have Portrait Orientation Lock enabled in the iOS Control Center.'
    ],
    related: ['picture-in-picture-mode', 'focus-mode', 'what-is-lookout']
  },
  {
    slug: 'picture-in-picture-mode',
    title: 'Using Picture-in-Picture (PiP) Mode',
    category: 'Recording Modes',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Configure the floating inset camera window, change positions, and swap streams.',
    overview: `Picture-in-Picture (PiP) mode overlays one camera feed inside a smaller, floating inset window on top of a full-screen background feed. This mode is widely used for tutorials, travel vlogs, software demos, and walking tours where one perspective needs to take visual priority while the presenter's face remains visible in a corner.

By default, Lookout configures the rear camera as the full-screen background stream and the front FaceTime camera as the small inset window. This puts the focus on what you are looking at while still showing your facial reactions. However, this configuration can be inverted at any time with a simple gesture.

The PiP window in Lookout is designed to be highly interactive. It can be dragged to any of the four corners of the screen and resized dynamically to fit your visual style, ensuring that it never covers up important action in the background stream.`,
    steps: [
      'Launch Lookout on your iPhone and tap "PiP" on the layout selector pill at the bottom of the viewfinder.',
      'Choose which camera should serve as the background: tap the Swap icon to toggle between front and rear cameras as the main canvas.',
      'Position the inset window: tap and hold the small floating window, then drag it to your preferred corner of the screen.',
      'Resize the inset window: use a two-finger pinch gesture directly on the floating window to scale it up or down.',
      'Press the red Record button to start recording. Double-tap the inset window at any time during capture to swap the feeds.',
      'Tap the Stop button. The final composite video is processed and saved to your Photos app.'
    ],
    tips: [
      'Position the floating inset window in the corner opposite of where the main action is taking place to prevent obscuring critical background details.',
      'Double-tapping the inset window while recording is a powerful storytelling tool: use it to instantly transition the focus from the environment to your reaction.',
      'If recording a presentation, keep the inset window small so it acts as a subtle guide rather than a distraction from the main content.'
    ],
    troubleshooting: [
      'If the floating inset window fails to respond to drag gestures, ensure your fingers are dry and that you aren\'t accidentally touching the edges of the iPhone screen.',
      'If the inset window disappears, tap the PiP icon in the layout bar again to reset its position to the top-right corner.',
      'If you notice lag in the floating window, close other applications using 3D rendering or location services in the background to free up system memory.'
    ],
    related: ['split-screen-recording', 'focus-mode', 'apple-watch-control']
  },
  {
    slug: 'focus-mode',
    title: 'Optimizing Battery and Heat with Focus Mode',
    category: 'Recording Modes',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Conserve battery life and keep your device cool during long shoots using Focus Mode.',
    overview: `Dual-camera video capture is one of the most hardware-demanding operations an iPhone can perform. Capturing, compositing, and encoding two high-definition feeds in real-time requires continuous high-performance throughput from the CPU, GPU, and Image Signal Processors (ISPs). This continuous processing generates significant heat and drains battery power rapidly.

To address these thermal and battery challenges, Lookout features **Focus Mode** (also known as Stealth Screen). When Focus Mode is enabled, the app automatically dims or turns off the screen's live viewfinder preview after a short period of inactivity, while the cameras continue to capture and record video streams at maximum quality in the background.

By disabling the screen's backlight and the real-time preview rendering pipeline, Focus Mode reduces your iPhone's overall power consumption by up to 30%. More importantly, it prevents the device from reaching high thermal thresholds that trigger iOS performance throttling or emergency shutdowns.`,
    steps: [
      'Open Lookout on your iPhone and prepare your recording layout (Split Screen or PiP).',
      'Locate the Focus button (represented by a Sparkle or Sun icon) in the bottom camera control bar.',
      'Tap the Focus button to enable Focus Mode. The icon will illuminate to show it is active.',
      'Tap the red Record button to begin filming. After 5 seconds, the screen preview will dim to a dark screen.',
      'To verify your framing or status at any time, tap anywhere on the screen. The preview will wake up for 5 seconds before dimming again.',
      'Tap the screen to wake it, and press the Stop button to finish recording as usual.'
    ],
    tips: [
      'Always use Focus Mode if you are recording outdoors under direct sunlight, as iPhones heat up rapidly in sunny conditions.',
      'Remove bulky protective cases from your iPhone before starting long recordings; cases act as thermal insulators and trap heat.',
      'If recording a long event (over 15 minutes), mount the phone on a tripod, plug it into a portable battery bank, and keep Focus Mode enabled throughout the session.'
    ],
    troubleshooting: [
      'If the screen goes entirely black and does not wake up when tapped, verify that your phone has not shut down due to low battery.',
      'If the video file is blank or corrupted after using Focus Mode, ensure you did not press the physical sleep/wake button on the side of the iPhone, which terminates all recording apps.',
      'If the preview does not dim after 5 seconds, ensure you do not have finger contact on the screen, as any touch resets the dimming timer.'
    ],
    related: ['troubleshooting-recording-issues', 'split-screen-recording', 'supported-devices']
  },
  {
    slug: 'apple-watch-control',
    title: 'Controlling Lookout from Apple Watch',
    category: 'Apple Watch',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Turn your Apple Watch into a remote control trigger and live camera viewfinder.',
    overview: `Lookout includes a native companion application for Apple Watch that transforms your wearable device into a remote control and wireless viewfinder. This integration allows you to mount your iPhone on a tripod, step back into the scene, and manage your recording session directly from your wrist.

The Apple Watch app communicates with your iPhone using Apple\'s low-energy WatchConnectivity framework. It provides a real-time, low-latency thumbnail preview of the combined camera feed, ensuring you are correctly aligned and framed. 

With the Lookout Apple Watch app, you can start, pause, and stop recordings, monitor audio input levels, check battery charge, and swap camera positions without ever having to walk back to your iPhone.`,
    steps: [
      'Ensure the Lookout Watch app is installed on your Apple Watch (see the Pairing guide for setup).',
      'Open the Lookout app on your iPhone and place the device on a tripod or mount.',
      'Launch the Lookout app on your Apple Watch. The watch screen will display a connection prompt.',
      'Once connected, you will see a live thumbnail preview of your iPhone\'s camera view on your watch.',
      'Confirm your framing on your wrist. Use the red Record button on the watch screen to start recording.',
      'Tap the Pause button on the watch if you need to take a break, or tap the Stop button to complete and save the recording.'
    ],
    tips: [
      'Keep your Apple Watch within 15 to 20 feet of your iPhone for the lowest preview latency and most stable Bluetooth connection.',
      'The watch preview is designed for framing verification; it runs at a lower frame rate to conserve battery on both devices.',
      'If recording alone, look directly at the iPhone lens rather than your Watch screen when speaking to maintain eye contact with your audience.'
    ],
    troubleshooting: [
      'If the watch screen displays a "Searching..." or "No Connection" message, ensure Bluetooth is enabled on both your iPhone and Watch.',
      'If the live preview image on the watch is lagging or frozen, close the app on both devices and relaunch them.',
      'If you do not see the Lookout app on your Apple Watch, open the iOS Watch app on your iPhone, scroll to Lookout, and ensure "Show App on Apple Watch" is enabled.'
    ],
    related: ['pairing-apple-watch', 'troubleshooting-watch-connectivity', 'what-is-lookout']
  },
  {
    slug: 'camera-permissions',
    title: 'Managing Camera and Microphone Permissions',
    category: 'Privacy & Permissions',
    lastUpdated: 'June 11, 2026',
    excerpt: 'How to grant, verify, and troubleshoot system permissions for Lookout.',
    overview: `Like all security-conscious iOS applications, Lookout operates within a strict sandboxed environment. To perform its primary function of dual-camera recording, the app requires explicit, user-authorized permissions to access your iPhone\'s front camera, rear camera, and system microphone.

During the very first launch, iOS will display system-level alerts requesting these permissions. If access is denied, Lookout will display a warning screen and will be unable to access the camera hardware, rendering the viewfinder black.

Lookout processes all video and audio feeds locally on your device. We do not transmit, store, or share your recordings, camera data, or audio files with any external servers. Your media is completely private, and permissions are used strictly to enable local hardware capture.`,
    steps: [
      'When launching Lookout for the first time, tap "OK" or "Allow" on the system prompts requesting Camera and Microphone access.',
      'To verify permissions later: Open the native Settings app on your iPhone.',
      'Scroll down through the application list and select "Lookout".',
      'Verify that the toggle switches next to "Camera" and "Microphone" are enabled (green).',
      'If you wish to reset all permissions, you can toggle them off, restart your iPhone, and toggle them back on.'
    ],
    tips: [
      'If you use external microphones, iOS may request additional permissions for local network or Bluetooth access; allow these to ensure compatibility.',
      'Always keep your iOS version updated, as Apple occasionally updates security frameworks that affect how applications request camera hardware access.',
      'If you have restrictions enabled under Settings > Screen Time > Content & Privacy Restrictions, make sure camera access is not blocked.'
    ],
    troubleshooting: [
      'If the camera feed is black but permissions are active, verify that another app (like FaceTime or Skype) is not running in the background and holding a lock on the camera system.',
      'If the microphone permissions toggle is grayed out, check your Screen Time settings to see if microphone changes are restricted on your device.',
      'If you continue to experience a permission warning, uninstall Lookout, restart your phone, and re-download the app from the App Store to force a fresh permission prompt.'
    ],
    related: ['what-is-lookout', 'data-privacy', 'supported-devices']
  },
  {
    slug: 'troubleshooting-recording-issues',
    title: 'Troubleshooting Recording Failures & Dropped Frames',
    category: 'Troubleshooting',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Resolve common errors with failed saves, app freezes, or thermal throttling.',
    overview: `Lookout pushes your iPhone\'s processor, graphic card, and camera sensors to high operational capacity. Capturing two streams of high-resolution video simultaneously requires significant system resources.

If your recordings are dropping frames (stuttering), failing to save, or causing the application to crash, the cause is typically related to device temperature, system memory pressure, or storage constraints. Understanding how to manage these factors will ensure stable, high-quality recordings every time.

By following a few simple prep steps, you can ensure that your iPhone has the resource headroom it needs to process dual-camera files without interruption.`,
    steps: [
      'Check storage: Go to Settings > General > iPhone Storage. Ensure you have at least 2 to 3 GB of free storage space available.',
      'Close background apps: Swipe up from the bottom of the screen to open the App Switcher, and swipe away all other applications to clear RAM.',
      'Disable Low Power Mode: Go to Settings > Battery and ensure Low Power Mode is disabled, as it severely limits GPU rendering speeds.',
      'Manage device heat: If the iPhone feels hot, remove its case, let it cool down in a shaded area, and use Focus Mode during the next recording.'
    ],
    tips: [
      'Avoid recording in 4K resolution on older supported devices (like the iPhone XS or XR) to prevent performance issues; use 1080p instead.',
      'Do not record while your phone is plugged into a fast-charger, as charging generates additional thermal load and causes rapid overheating.',
      'Restart your iPhone before starting an important shoot to clear system cache files and refresh memory allocation.'
    ],
    troubleshooting: [
      'If the recording stops automatically after a few seconds, check your storage space; iOS will terminate the video if it runs out of space.',
      'If the app freezes when tapping the stop button, wait 10 seconds; the phone is processing and merging the audio/video tracks in the background.',
      'If the saved video has lag or audio sync issues, lower the recording frame rate from 60fps to 30fps in Lookout settings.'
    ],
    related: ['focus-mode', 'audio-problems', 'supported-devices']
  },
  {
    slug: 'pairing-apple-watch',
    title: 'Pairing and Syncing Apple Watch with Lookout',
    category: 'Apple Watch',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Step-by-step setup to connect your watch to the iPhone viewfinder app.',
    overview: `Linking your Apple Watch with Lookout enables wireless viewfinder streaming and remote recording triggers. The connection is handled natively through Apple's watchOS and iOS communication APIs, requiring no manual pairing codes or Bluetooth pairing steps.

To sync the devices, both apps must be installed and active, and your iPhone and Apple Watch must be within close physical range. Once the link is established, you can mount your iPhone on a stand and direct your recording from your wrist.`,
    steps: [
      'Open the Watch app on your iPhone and ensure Lookout is listed under "Installed on Apple Watch".',
      'If not installed, scroll down to "Available Apps", find Lookout, and tap the Install button.',
      'Make sure Bluetooth and Wi-Fi are toggled ON on both your iPhone and your Apple Watch.',
      'Open the Lookout app on your iPhone first.',
      'Open the Lookout app on your Apple Watch. The watch will display a "Connecting" status indicator.',
      'Within a few seconds, the live viewfinder preview will load on your watch screen, indicating a successful link.'
    ],
    tips: [
      'Keep the devices close together (within 5 feet) during the initial pairing sequence to ensure rapid synchronization.',
      'Ensure your Apple Watch screen wake duration is set to "Wake for 70 Seconds" in Watch Settings > Display & Brightness to keep the preview active.',
      'To save battery, the Watch viewfinder preview automatically reduces its update rate when the Watch screen dims.'
    ],
    troubleshooting: [
      'If the Watch app displays "Please open Lookout on iPhone" when the app is already open, force-close the iPhone app and open it again.',
      'Verify that the Apple Watch is not in Airplane Mode or Theater Mode, which disables wireless transmission.',
      'If connection issues persist, navigate to Settings > Bluetooth on your iPhone, toggle it OFF for 10 seconds, then turn it back ON.'
    ],
    related: ['apple-watch-control', 'troubleshooting-watch-connectivity']
  },
  {
    slug: 'troubleshooting-watch-connectivity',
    title: 'Troubleshooting Watch Connectivity Problems',
    category: 'Apple Watch',
    lastUpdated: 'June 11, 2026',
    excerpt: 'How to resolve sync lag or connection failure alerts on your Watch.',
    overview: `While Apple's WatchConnectivity framework is designed to handle background sync smoothly, system-level issues can occasionally disrupt the wireless link between your iPhone and Apple Watch. This can manifest as a persistent "Connecting..." screen, an unresponsive viewfinder, or a "Disconnected" warning.

These connection failures are typically caused by iOS Bluetooth stack lag, watchOS power-saving modes, or corrupted cache data in the watchOS system files. Fortunately, these issues can be resolved with standard troubleshooting steps.`,
    steps: [
      'Force close both apps: Swipe up on the iPhone App Switcher and swipe Lookout away. On Apple Watch, press and hold the side button, then swipe left on Lookout and tap Close.',
      'Toggle Bluetooth: Open iPhone Settings > Bluetooth, turn it OFF, wait 5 seconds, and turn it back ON.',
      'Verify trust connection: Unlock your Apple Watch and ensure it is connected to your iPhone in the watch Control Center (green phone icon).',
      'Relaunch Lookout: Open the iPhone app first, wait for the viewfinder to load, then open the Watch app.'
    ],
    tips: [
      'Ensure neither device has Low Power Mode enabled, as iOS limits background wireless traffic when power-saving is active.',
      'Avoid running other bluetooth streaming apps (like Spotify or podcast syncs) while using the remote viewfinder to reduce bandwidth congestion.',
      'Keep your watch and phone operating system versions updated to prevent protocol version mismatches.'
    ],
    troubleshooting: [
      'If the watch preview screen is static and does not update, tap the screen once to force-refresh the connection handshake.',
      'If the Watch button does not trigger recording, verify that the iPhone is not currently saving or processing a previous video.',
      'If all else fails, restart both the iPhone and the Apple Watch to clear the hardware wireless caches.'
    ],
    related: ['apple-watch-control', 'pairing-apple-watch']
  },
  {
    slug: 'audio-problems',
    title: 'Resolving Audio Sync or Distortion Problems',
    category: 'Troubleshooting',
    lastUpdated: 'June 11, 2026',
    excerpt: 'How to troubleshoot sound levels, external microphones, and audio lag.',
    overview: `High-quality audio is essential for premium creator content. Because Lookout records two camera perspectives at once, managing the audio input and ensuring it aligns perfectly with the video frames is a top priority.

If you encounter videos with no sound, distorted static noise, or audio tracks that slowly drift out of sync over time, the issue is typically linked to microphone hardware permissions, connection timing, or system processor load. By configuring your audio setup correctly, you can achieve clean, synchronized sound for every vlog and interview.`,
    steps: [
      'Verify permissions: Go to Settings > Lookout on your iPhone and ensure Microphone access is enabled.',
      'Connect external hardware: If using wireless or lapel microphones, plug them into the iPhone lightning/USB-C port *before* launching Lookout.',
      'Check input source: In Lookout Settings, verify that the selected input matches your desired mic (Built-in Front, Built-in Back, or External).',
      'Test audio levels: Speak into the mic and check the audio level meter in the viewfinder to confirm active sound input.'
    ],
    tips: [
      'Hold the iPhone so that your hands do not cover the tiny microphone grills located at the bottom edges and next to the rear camera lens.',
      'If recording in windy conditions, use an external lapel microphone with a wind muff (deadcat) to prevent distortion.',
      'To prevent audio sync drift on long recordings, record in 1080p resolution to reduce system processor stress.'
    ],
    troubleshooting: [
      'If the video has no audio, check if your iPhone was connected to a Bluetooth speaker or headset that hijacked the system audio input.',
      'If the sound is distorted or static, unplug the external microphone receiver, clean the connection port, and plug it back in firmly.',
      'If audio is out of sync, play the video on a computer or separate device; sometimes the iOS Photos app has a temporary playback lag that resolves after export.'
    ],
    related: ['troubleshooting-recording-issues', 'camera-permissions']
  },
  {
    slug: 'thermal-performance',
    title: 'Optimizing Device Heat and Battery Life',
    category: 'Troubleshooting',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Best practices to prevent overheating during long dual-angle recordings.',
    overview: `Dual-sensor video capture requires continuous maximum output from your iPhone's camera arrays and graphics processors, which naturally generates heat. If the device temperature becomes too high, iOS will step in to protect the battery and internal components by throttling performance, resulting in dropped frames, or shutting down the app entirely.

By adopting simple thermal management strategies, you can prolong your recording sessions, protect your battery health, and record continuously without performance drops.`,
    steps: [
      'Enable Focus Mode: Use the dimming preview feature to turn off the screen display while recording continues.',
      'Remove phone cases: Take off thick plastic, leather, or rubber protective cases, which act as insulators and trap heat.',
      'Stay in the shade: Avoid recording in direct sunlight or in hot, unventilated environments (such as a closed car).',
      'Lower capture settings: If your phone is heating up quickly, switch from 60fps to 30fps and from 4K to 1080p.'
    ],
    tips: [
      'Mount the iPhone on a metal tripod mount, which can act as a minor heat sink to help dissipate warmth away from the device chassis.',
      'Do not charge your iPhone while recording, as the battery charging process generates significant internal heat.',
      'Let your phone cool down for 5 minutes between long recording sessions to prevent cumulative thermal build-up.'
    ],
    troubleshooting: [
      'If the iPhone displays a "Temperature" warning screen, iOS has locked the device; place it in a cool, shaded area and wait for it to cool down.',
      'If the app closes suddenly without warning, check the iOS crash logs under Settings > Privacy > Analytics; this usually indicates a thermal safety shutdown.',
      'If the phone battery drops rapidly during recording, this is expected; use Focus Mode to extend battery life by up to 30%.'
    ],
    related: ['focus-mode', 'troubleshooting-recording-issues', 'supported-devices']
  },
  {
    slug: 'data-privacy',
    title: 'Data Privacy: 100% Local Processing Commitment',
    category: 'Privacy & Permissions',
    lastUpdated: 'June 11, 2026',
    excerpt: 'Learn how Lookout guarantees that your camera feeds and videos never leave your device.',
    overview: `At Lookout, we believe your creative process and raw video content belong to you and you alone. Unlike many modern camera and social media apps that require online accounts, upload data to remote cloud servers, or track your movements, Lookout is built on a strict local-only data architecture.

We do not operate remote video processing servers, and we do not collect telemetry about what you record. The moment you press the Record button, the video streams are captured, synchronized, and written directly into your iOS system storage using local hardware acceleration. 

This local-first model means you can record in remote locations without internet access, and rest easy knowing that your footage is fully secure.`,
    steps: [
      'Use Lookout completely offline: Toggle Airplane Mode ON to verify that all recording and saving functions work perfectly without network access.',
      'Check network access: Go to Settings > Lookout and notice that the app does not request Cellular Data or Local Network permissions.',
      'Manage video saves: All saved files reside in your native iOS Photos Library and are subject to your personal iCloud backup preferences.'
    ],
    tips: [
      'Because Lookout processes everything on-device, your video files are never compressed or altered by cloud transit; you get the raw, full-quality source files.',
      'Since we do not collect user data, there are no accounts to manage or passwords to remember. The app is ready to use immediately upon install.',
      'To back up your footage, use standard Apple services like iCloud Photos or plug your iPhone into a computer to copy the files.'
    ],
    troubleshooting: [
      'If you are concerned about data leaks, you can disable Internet Access for Lookout in iOS Settings; the app will continue to function normally.',
      'If you delete a video, it is moved to the "Recently Deleted" album in your Photos app, where you can recover it within 30 days.',
      'If you require help with data export, see Apple\'s official support guides for exporting media from the Photos app.'
    ],
    related: ['camera-permissions', 'what-is-lookout']
  }
];
