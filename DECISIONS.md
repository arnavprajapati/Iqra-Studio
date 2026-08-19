# Technical Decisions & Architecture (DECISIONS.md)

### 1. Ingestion Strategy: Client-Side Canvas Sandbox vs. Rich Online Editor
Instead of implementing a heavy, interactive rich editor (like Canva or Customily) that uploads layered templates to a media server for backend processing, we chose a **lightweight real-time CSS overlay canvas** coupled with a **structured WhatsApp and Cart Context ingestion system**.

* **Why this was chosen:** Most customers order personalized gifts on mobile where heavy editors suffer from latency, UI clipping, and high bounce rates.
* **The Alternative Rejected:** Building a canvas rendering backend (Node-Canvas/Puppeteer). While it gives pixel-perfect print proofs, it is complex, slow to load, and creates checkout friction. By ingesting custom parameters via local state (CartContext) and passing them as structured URL metadata to WhatsApp, we achieve near-instantaneous load times and a frictionless ordering flow on mobile.

### 2. Time-Limit Trade-offs & Future Horizon
* **Trade-off Made:** The preview uses static product images with layered CSS positioning/skew for the text, rather than full 3D mockups.
* **With a Full Week:** I would integrate a lightweight WebGL viewer (Three.js/React Three Fiber) to map the text dynamically on a 3D model of the mug/polaroid, allowing the user to rotate the gift in 3D and preview lighting reflectivity.

### 3. AI Usage & Personal Verification
* **Where AI was used:** Scaffolded the CSS skew/rotation variables to approximate the cylindrical distortion of the mug's curve.
* **What I personally verified/changed:** 
  * Manually fine-tuned font sizes (`clamp()` scaling), container constraints, and contrast colors to ensure readability at both 390px mobile viewports and 1440px desktop screens.
  * Verified that custom items properly serialize in `localStorage` inside `CartContext` and persist correctly.
  * Built the custom easter egg trigger logic and animation sequence manually to keep bundle sizes minimal.
