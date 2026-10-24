lucide.createIcons();

    /* ==========================================================================
       TOAST UTILITY
       ========================================================================== */
    const toastEl = document.getElementById("toast-element");
    const toastMsg = document.getElementById("toast-message");
    let toastTimer = null;

    function showToast(message) {
      if (toastTimer) clearTimeout(toastTimer);
      toastMsg.innerText = message;
      toastEl.classList.remove("translate-y-24", "opacity-0");
      toastEl.classList.add("translate-y-0", "opacity-100");
      toastTimer = setTimeout(() => {
        toastEl.classList.remove("translate-y-0", "opacity-100");
        toastEl.classList.add("translate-y-24", "opacity-0");
      }, 3200);
    }

    /* ==========================================================================
       14 TECHNICAL SKILLS (DIRECTLY SOURCED FROM 3 FEATURED PROJECTS)
       ========================================================================== */
    const TECH_SKILLS = [
      {
        id: "python",
        name: "Python",
        icon: "🐍",
        category: "languages",
        categoryLabel: "Core Language",
        role: "Primary Backend Architecture & Machine Learning Language",
        projectUse: "Powers the asynchronous runtime of the Multi-Tenant RAG AI System, custom Bi-GRU neural emotion detection models, and California Housing statistical regression pipelines.",
        strengths: ["AsyncIO Non-Blocking Runtimes", "Scientific & Tensor Computing", "Idiomatic OOP & Functional Pipelines"],
        synergy: ["FastAPI", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "PostgreSQL"]
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "🟨",
        category: "languages",
        categoryLabel: "Web Scripting",
        role: "Interactive Client Frontends & Real-Time Asynchrony",
        projectUse: "Constructs responsive client frontends, including the real-time Emotion Scanner UI, Server-Sent Events (SSE) token consumption, and React component interactions.",
        strengths: ["Event-Driven Asynchrony", "DOM Manipulation & Canvas", "Streaming SSE Handling"],
        synergy: ["React", "FastAPI", "Tailwind CSS"]
      },
      {
        id: "fastapi",
        name: "FastAPI",
        icon: "⚡",
        category: "frameworks",
        categoryLabel: "Backend Framework",
        role: "High-Performance Asynchronous REST API Engine",
        projectUse: "Core backend framework across all 3 projects: powers SSE token streaming for RAG, sub-100ms inference endpoints for Emotion Scanner, and Pydantic-validated prediction pipelines.",
        strengths: ["Sub-Millisecond Async Dispatch", "Pydantic V2 Strict Typing", "Automated OpenAPI Documentation"],
        synergy: ["Python", "PostgreSQL", "Celery", "Redis", "TensorFlow", "Scikit-learn"]
      },
      {
        id: "react",
        name: "React",
        icon: "⚛️",
        category: "frameworks",
        categoryLabel: "UI Framework",
        role: "Modern Single Page Application UI Architecture",
        projectUse: "Builds the production-grade frontend for the Multi-Tenant RAG AI System (React 19), managing streaming chat responses, document uploading states, and tenant dashboards.",
        strengths: ["Virtual DOM Reconciliation", "Component State Reusability", "Custom Hooks Architecture"],
        synergy: ["JavaScript", "FastAPI", "Tailwind CSS"]
      },
      {
        id: "tensorflow",
        name: "TensorFlow / Keras",
        icon: "🧠",
        category: "data_ml",
        categoryLabel: "Deep Learning Runtime",
        role: "Neural Network Architecture & Edge Quantization",
        projectUse: "Built, trained, and optimized the custom Bidirectional GRU (Bi-GRU) architecture for the Emotion Scanner web app, quantized to TF Lite for lightweight real-time inference.",
        strengths: ["Bidirectional Sequence Modeling", "TF Lite Edge Quantization", "Custom Dense Softmax Layers"],
        synergy: ["Python", "NumPy", "FastAPI"]
      },
      {
        id: "scikit",
        name: "Scikit-learn",
        icon: "⚙️",
        category: "data_ml",
        categoryLabel: "Machine Learning",
        role: "Regression, Ensembles & Data Preprocessing",
        projectUse: "Engineered the California Housing dataset pipeline: StandardScaler, 200-estimator RandomForestRegressor, k-fold cross-validation, and serialized joblib model artifacts.",
        strengths: ["Standardized Scaler Transformers", "Ensemble Tree Methods", "Rigorous Cross-Validation"],
        synergy: ["Python", "Pandas", "NumPy", "Matplotlib"]
      },
      {
        id: "langchain",
        name: "LangChain",
        icon: "🦜🔗",
        category: "data_ml",
        categoryLabel: "AI & LLM Orchestration",
        role: "Context Retrieval Chains & Semantic Ingestion",
        projectUse: "Constructs semantic context-augmented prompts, recursive document chunking strategies, and interfaces with embedding models for the Multi-Tenant RAG platform.",
        strengths: ["Recursive Character Splitting", "Prompt Template Synthesis", "Vector Retriever Integrations"],
        synergy: ["Python", "FastAPI", "PostgreSQL", "pgvector"]
      },
      {
        id: "pandas",
        name: "Pandas",
        icon: "🐼",
        category: "data_ml",
        categoryLabel: "Data Engineering",
        role: "DataFrame Transformation & Exploratory Analysis",
        projectUse: "Cleanses raw California Housing datasets, performs outlier detection, missing value imputation, and transforms census feature tables for regression training.",
        strengths: ["Vectorized Column Transformations", "Missing Imputation Algorithms", "Exploratory Data Profiling"],
        synergy: ["Python", "NumPy", "Scikit-learn", "Matplotlib"]
      },
      {
        id: "numpy",
        name: "NumPy",
        icon: "🔢",
        category: "data_ml",
        categoryLabel: "Numerical Math",
        role: "Vector Math & High-Dimensional Matrices",
        projectUse: "Performs matrix dot-products, tensor reshaping for Bi-GRU sequence inputs in Emotion Scanner, and numerical feature scaling transformations.",
        strengths: ["N-Dimensional Array Memory", "BLAS Vectorized Dot Products", "Broadcasting Computations"],
        synergy: ["Python", "Pandas", "Scikit-learn", "TensorFlow"]
      },
      {
        id: "matplotlib",
        name: "Matplotlib",
        icon: "📊",
        category: "data_ml",
        categoryLabel: "Visualization",
        role: "Model Evaluation Plots & Metric Visualization",
        projectUse: "Generates training loss curves for neural network convergence, confusion matrices for the 6-class emotion dataset, and residual error plots for housing predictions.",
        strengths: ["Loss Curve Diagnostics", "Confusion Matrix Heatmaps", "Residual Distribution Plots"],
        synergy: ["Python", "Pandas", "NumPy", "Scikit-learn"]
      },
      {
        id: "postgresql",
        name: "PostgreSQL 16 & pgvector",
        icon: "🐘",
        category: "databases",
        categoryLabel: "Relational & Vector DB",
        role: "ACID Relational Storage & High-Dimensional Vector Search",
        projectUse: "Serves as the central data store for Multi-Tenant RAG AI System, providing strict user_id row-level isolation, PostgreSQL tsvector full-text search, and dense pgvector cosine similarity indexing.",
        strengths: ["pgvector HNSW Cosine Indexing", "Row-Level Multi-Tenant Isolation", "ACID Relational Compliance"],
        synergy: ["FastAPI", "Python", "Celery", "Redis"]
      },
      {
        id: "redis_celery",
        name: "Redis & Celery",
        icon: "⚡📦",
        category: "databases",
        categoryLabel: "Task Queue & Cache",
        role: "Distributed Task Queue & Low-Latency Caching",
        projectUse: "Orchestrates non-blocking asynchronous document ingestion in the Multi-Tenant RAG platform, queuing PDF uploads in Redis and processing embedding pipelines via Celery workers.",
        strengths: ["Non-Blocking Asynchronous Workers", "In-Memory Task Broker", "Decoupled Heavy Compute Jobs"],
        synergy: ["FastAPI", "Python", "PostgreSQL"]
      },
      {
        id: "git",
        name: "Git / GitHub",
        icon: "🐙",
        category: "databases",
        categoryLabel: "DevOps & Tooling",
        role: "Version Control & Collaborative Development",
        projectUse: "Maintains source repositories, CI/CD automated deployment pipelines to Vercel/Render, branch management, and open-source version tracking for all 3 featured systems.",
        strengths: ["Trunk-Based & Feature Branching", "Rebase & Conflict Resolution", "Automated Webhook Deployments"],
        synergy: ["Python", "FastAPI", "React"]
      },
      {
        id: "postman",
        name: "Postman",
        icon: "🚀",
        category: "databases",
        categoryLabel: "API Tooling",
        role: "Automated Endpoint Contract Testing & Benchmarking",
        projectUse: "Certified in REST APIs by HackerRank. Utilized Postman collections to execute stress testing, verify HTTP status codes, and test FastAPI multi-tenant token authorization flows.",
        strengths: ["Automated Collection Test Suites", "Environment Variable Orchestration", "Latency & Contract Validation"],
        synergy: ["FastAPI", "Python", "PostgreSQL"]
      }
    ];

    /* ==========================================================================
       EDUCATION SECTION (ACADEMIC HORIZON RUNWAY & SAPPHIRE STATIONS)
       ========================================================================== */

    /* ==========================================================================
       INTERACTIVE 3D ROTATING TECH SKILL SPHERE (HTML5 CANVAS)
       ========================================================================== */
    const sphereCanvas = document.getElementById("tech-sphere-canvas");
    const sphereCtx = sphereCanvas.getContext("2d");
    const inspectorBody = document.getElementById("stack-inspector-body");
    const inspectorCatBadge = document.getElementById("inspector-category-badge");
    const activeCountLabel = document.getElementById("sphere-active-count");

    let sphereW = 500, sphereH = 500;
    let sphereRadius = 190;
    let rotationX = 0.2;
    let rotationY = 0.3;
    let velocityX = 0.0025;
    let velocityY = 0.0018;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let activeFilter = "all";
    let selectedSkillId = "fastapi";
    let hoveredSkillId = null;

    const sphereNodes = [];
    const N = TECH_SKILLS.length;
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      sphereNodes.push({
        skill: TECH_SKILLS[i],
        origX: x,
        origY: y,
        origZ: z,
        projX: 0,
        projY: 0,
        projScale: 1,
        projZ: 0
      });
    }

    function resizeSphereCanvas() {
      const rect = sphereCanvas.parentElement.getBoundingClientRect();
      sphereW = sphereCanvas.width = rect.width;
      sphereH = sphereCanvas.height = Math.min(520, Math.max(380, rect.width * 0.85));
      sphereRadius = Math.min(sphereW, sphereH) * 0.36;
    }
    window.addEventListener("resize", resizeSphereCanvas);
    setTimeout(resizeSphereCanvas, 100);

    sphereCanvas.addEventListener("mousedown", (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      velocityX = 0;
      velocityY = 0;
    });

    window.addEventListener("mousemove", (e) => {
      const rect = sphereCanvas.getBoundingClientRect();
      const mouseCanvasX = e.clientX - rect.left;
      const mouseCanvasY = e.clientY - rect.top;

      if (isDragging) {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        velocityY = dx * 0.005;
        velocityX = -dy * 0.005;
        rotationY += velocityY;
        rotationX += velocityX;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      } else {
        let hit = null;
        for (let i = sphereNodes.length - 1; i >= 0; i--) {
          const node = sphereNodes[i];
          if (node.projZ < -sphereRadius * 0.6) continue;
          const dist = Math.hypot(mouseCanvasX - node.projX, mouseCanvasY - node.projY);
          if (dist < 32 * node.projScale) {
            hit = node.skill.id;
            break;
          }
        }
        hoveredSkillId = hit;
      }
    });

    window.addEventListener("mouseup", () => { isDragging = false; });

    sphereCanvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
        velocityX = 0;
        velocityY = 0;
      }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - lastMouseX;
        const dy = e.touches[0].clientY - lastMouseY;
        velocityY = dx * 0.005;
        velocityX = -dy * 0.005;
        rotationY += velocityY;
        rotationX += velocityX;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener("touchend", () => { isDragging = false; });

    sphereCanvas.addEventListener("click", (e) => {
      const rect = sphereCanvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = sphereNodes.length - 1; i >= 0; i--) {
        const node = sphereNodes[i];
        const dist = Math.hypot(clickX - node.projX, clickY - node.projY);
        if (dist < 35 * node.projScale) {
          selectSkill(node.skill.id);
          showToast(`Selected: ${node.skill.name}`);
          break;
        }
      }
    });

    document.getElementById("reset-sphere-rot-btn").addEventListener("click", () => {
      rotationX = 0.2;
      rotationY = 0.3;
      velocityX = 0.0025;
      velocityY = 0.0018;
      showToast("3D Sphere view reset to center");
    });

    function render3DSphere() {
      if (!sphereW || !sphereH) {
        requestAnimationFrame(render3DSphere);
        return;
      }

      sphereCtx.clearRect(0, 0, sphereW, sphereH);

      if (!isDragging) {
        rotationX += velocityX;
        rotationY += velocityY;
        velocityX *= 0.96;
        velocityY *= 0.96;
        if (Math.abs(velocityX) < 0.0012) velocityX = 0.0012;
        if (Math.abs(velocityY) < 0.0022) velocityY = 0.0022;
      }

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      const centerX = sphereW / 2;
      const centerY = sphereH / 2;
      const fov = 480;

      sphereCtx.save();
      sphereCtx.beginPath();
      sphereCtx.arc(centerX, centerY, sphereRadius * 0.96, 0, Math.PI * 2);
      sphereCtx.strokeStyle = "rgba(192, 132, 252, 0.12)";
      sphereCtx.lineWidth = 1.2;
      sphereCtx.setLineDash([4, 6]);
      sphereCtx.stroke();

      sphereCtx.beginPath();
      sphereCtx.ellipse(centerX, centerY, sphereRadius * 1.05, sphereRadius * 0.35, rotationY * 0.5, 0, Math.PI * 2);
      sphereCtx.strokeStyle = "rgba(56, 189, 248, 0.15)";
      sphereCtx.lineWidth = 1;
      sphereCtx.stroke();
      sphereCtx.restore();

      for (let i = 0; i < sphereNodes.length; i++) {
        const node = sphereNodes[i];
        const x0 = node.origX * sphereRadius;
        const y0 = node.origY * sphereRadius;
        const z0 = node.origZ * sphereRadius;

        const y1 = y0 * cosX - z0 * sinX;
        const z1 = z0 * cosX + y0 * sinX;

        const x2 = x0 * cosY + z1 * sinY;
        const z2 = z1 * cosY - x0 * sinY;

        const scale = fov / (fov + z2);
        node.projScale = scale;
        node.projX = centerX + x2 * scale;
        node.projY = centerY + y1 * scale;
        node.projZ = z2;
      }

      sphereNodes.sort((a, b) => a.projZ - b.projZ);

      for (let i = 0; i < sphereNodes.length; i++) {
        const node = sphereNodes[i];
        const skill = node.skill;
        const isSelected = skill.id === selectedSkillId;
        const isHovered = skill.id === hoveredSkillId;
        const matchesFilter = activeFilter === "all" || skill.category === activeFilter;

        const depthAlpha = Math.max(0.2, Math.min(1.0, (node.projZ + sphereRadius) / (sphereRadius * 2)));
        let finalAlpha = matchesFilter ? depthAlpha : 0.12;

        sphereCtx.save();
        sphereCtx.translate(node.projX, node.projY);

        const badgeScale = (isSelected || isHovered) ? node.projScale * 1.18 : node.projScale;
        sphereCtx.scale(badgeScale, badgeScale);

        sphereCtx.font = "bold 11px 'JetBrains Mono', monospace";
        const labelText = `${skill.icon} ${skill.name}`;
        const textWidth = sphereCtx.measureText(labelText).width;
        const boxWidth = textWidth + 18;
        const boxHeight = 26;

        sphereCtx.beginPath();
        const r = boxHeight / 2;
        sphereCtx.roundRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight, r);

        if (isSelected) {
          sphereCtx.fillStyle = `rgba(192, 132, 252, ${Math.max(0.85, finalAlpha)})`;
          sphereCtx.strokeStyle = "#ffffff";
          sphereCtx.lineWidth = 2;
          sphereCtx.shadowColor = "#c084fc";
          sphereCtx.shadowBlur = 18;
        } else if (isHovered) {
          sphereCtx.fillStyle = `rgba(56, 189, 248, ${Math.max(0.8, finalAlpha)})`;
          sphereCtx.strokeStyle = "#38bdf8";
          sphereCtx.lineWidth = 1.5;
          sphereCtx.shadowColor = "#38bdf8";
          sphereCtx.shadowBlur = 14;
        } else if (matchesFilter) {
          sphereCtx.fillStyle = `rgba(18, 14, 34, ${0.75 * finalAlpha})`;
          sphereCtx.strokeStyle = `rgba(192, 132, 252, ${0.45 * finalAlpha})`;
          sphereCtx.lineWidth = 1;
          sphereCtx.shadowColor = "rgba(0,0,0,0.5)";
          sphereCtx.shadowBlur = 6;
        } else {
          sphereCtx.fillStyle = `rgba(10, 10, 20, 0.25)`;
          sphereCtx.strokeStyle = `rgba(255, 255, 255, 0.05)`;
          sphereCtx.lineWidth = 0.5;
        }

        sphereCtx.fill();
        sphereCtx.stroke();
        sphereCtx.shadowBlur = 0;

        sphereCtx.fillStyle = isSelected 
          ? "#090d16" 
          : (isHovered ? "#060913" : (matchesFilter ? `rgba(241, 245, 249, ${Math.max(0.4, finalAlpha)})` : `rgba(148, 163, 184, 0.25)`));
        sphereCtx.textAlign = "center";
        sphereCtx.textBaseline = "middle";
        sphereCtx.fillText(labelText, 0, 1);

        sphereCtx.restore();
      }

      requestAnimationFrame(render3DSphere);
    }
    render3DSphere();

    /* ==========================================================================
       UIVERSE GOOEY LAVA COMPONENT LOADER HELPER (BY ANDREW-MANZYK)
       ========================================================================== */
    function showComponentLoader(container, message = "", duration = 280) {
      if (!container) return;
      const prevPosition = window.getComputedStyle(container).position;
      if (prevPosition === "static") {
        container.style.position = "relative";
      }
      const loaderOverlay = document.createElement("div");
      loaderOverlay.className = "component-loader-overlay";
      loaderOverlay.innerHTML = `
        <div class="uiverse-lava-loader" style="--size: 0.7;">
          <div class="box"></div>
        </div>
        ${message ? `<div class="mt-3 text-[10.5px] font-mono text-amber-400 tracking-wider uppercase animate-pulse">${message}</div>` : ''}
      `;
      container.appendChild(loaderOverlay);

      setTimeout(() => {
        loaderOverlay.classList.add("is-hidden");
        setTimeout(() => loaderOverlay.remove(), 350);
      }, duration);
    }
    window.showComponentLoader = showComponentLoader;

    /* ==========================================================================
       CLEAN SKILL INSPECTOR (ZERO CODE BLOCKS)
       ========================================================================== */
    function selectSkill(skillId, triggerLoader = false) {
      selectedSkillId = skillId;
      const skill = TECH_SKILLS.find(s => s.id === skillId);
      if (!skill) return;

      if (triggerLoader && inspectorBody) {
        showComponentLoader(inspectorBody, "Loading Node...", 250);
      }

      inspectorCatBadge.innerText = skill.categoryLabel;

      inspectorBody.innerHTML = `
        <div class="pb-3 border-b border-white/10">
          <div class="text-slate-400 text-[10px] uppercase tracking-wider">TECHNOLOGY SPECIFICATION</div>
          <div class="text-2xl font-bold text-white font-sans mt-1 flex items-center justify-between">
            <span class="flex items-center gap-2">
              <span class="text-2xl">${skill.icon}</span>
              <span>${skill.name}</span>
            </span>
            <span class="text-[10.5px] font-mono text-purple-300 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/40">Verified Skill</span>
          </div>
        </div>

        <div>
          <div class="text-purple-300 text-[10.5px] uppercase font-bold flex items-center gap-1.5 mb-1">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i>
            <span>Architectural Role:</span>
          </div>
          <p class="text-slate-200 text-xs font-sans leading-relaxed">${skill.role}</p>
        </div>

        <div class="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20">
          <div class="text-purple-300 text-[10.5px] uppercase font-bold flex items-center gap-1.5 mb-1">
            <i data-lucide="layers" class="w-3.5 h-3.5"></i>
            <span>Real-World Implementation in Projects:</span>
          </div>
          <p class="text-slate-300 text-xs font-sans leading-relaxed">${skill.projectUse}</p>
        </div>

        <div>
          <div class="text-slate-400 text-[10px] uppercase tracking-wider mb-1.5">Key Capabilities & Strengths:</div>
          <div class="flex flex-wrap gap-1.5">
            ${skill.strengths.map(str => `
              <span class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 text-[10.5px] font-sans flex items-center gap-1">
                <span class="text-emerald-400">✔</span>
                <span>${str}</span>
              </span>
            `).join('')}
          </div>
        </div>

        <div class="pt-2 border-t border-white/10">
          <div class="text-slate-400 text-[10px] uppercase tracking-wider mb-1.5">Interfacing Pipeline Synergies:</div>
          <div class="flex flex-wrap gap-1.5">
            ${skill.synergy.map(syn => `
              <span class="px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">${syn}</span>
            `).join('')}
          </div>
        </div>
      `;

      lucide.createIcons();
    }

    document.querySelectorAll(".sphere-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".sphere-filter-btn").forEach(b => {
          b.classList.remove("bg-purple-500/20", "text-purple-200", "border-purple-500/40", "font-semibold");
          b.classList.add("bg-white/5", "text-slate-300", "border-white/10");
        });
        btn.classList.add("bg-purple-500/20", "text-purple-200", "border-purple-500/40", "font-semibold");
        btn.classList.remove("bg-white/5", "text-slate-300", "border-white/10");

        activeFilter = btn.getAttribute("data-filter");
        const matchCount = activeFilter === "all" ? TECH_SKILLS.length : TECH_SKILLS.filter(s => s.category === activeFilter).length;
        activeCountLabel.innerText = `${matchCount} Skills Highlighted`;

        const currentSkill = TECH_SKILLS.find(s => s.id === selectedSkillId);
        if (activeFilter !== "all" && currentSkill.category !== activeFilter) {
          const first = TECH_SKILLS.find(s => s.category === activeFilter);
          if (first) selectSkill(first.id);
        }

        showComponentLoader(document.querySelector(".sphere-container-glass"), "Filtering Matrix...", 240);
        showToast(`Filtered: ${btn.getAttribute("data-badge")}`);
      });
    });

    selectSkill("fastapi");

    /* ==========================================================================
       PROJECTS DATA & LIVE SIMULATORS (WITH GLASS FOLDER METADATA & REPO LINKS)
       ========================================================================== */
    const USER_PROJECTS = [
      {
        id: "rag",
        title: "Multi-Tenant RAG AI System",
        category: "AI BACKEND & ISOLATED RETRIEVAL",
        status: "PRODUCTION ARCHITECTURE",
        statusColor: "emerald",
        liveUrl: "https://document-rag-olive.vercel.app/",
        githubUrl: "https://github.com/Rushikesh282006/Document_Rag.git",
        summary: "Groundwork: Production-grade multi-tenant RAG platform coupling asynchronous FastAPI, PostgreSQL 16 (pgvector), Celery, and Redis with React 19. Features strict tenant isolation at the database layer, non-blocking asynchronous Celery PDF ingestion, Reciprocal Rank Fusion (RRF) hybrid retrieval combining dense pgvector cosine similarity with PostgreSQL tsvector full-text search, and real-time Server-Sent Events (SSE) token streaming with verified page-level citations.",
        techStack: ["FastAPI", "PostgreSQL 16", "pgvector", "Celery", "Redis", "React 19", "TanStack Router", "Tailwind CSS v4"],
        metrics: [
          { label: "Tenant Isolation", value: "Strict user_id" },
          { label: "Hybrid Search", value: "RRF (Dense + BM25)" },
          { label: "Token Streaming", value: "Real-Time SSE" }
        ],
        art: "aurora",
        folderMeta: "FastAPI · pgvector · Celery",
        files: [
          { name: "Architecture.spec", meta: "FastAPI + pgvector + Celery", art: "aurora" },
          { name: "Hybrid_Retrieval.rrf", meta: "Cosine + tsvector BM25" },
          { name: "Token_Stream.sse", meta: "Real-time SSE Citations", art: "verdant" },
          { name: "Tenant_Isolation.jwt", meta: "Row-level user_id filter" }
        ],
        specCode: `[User PDF / Ingestion Request] ──► [FastAPI Gateway (JWT Auth)]
       │
       ▼
[Redis Task Queue] ──► [Celery Worker Pool]
       │                 ├── Page-Aware Extraction (pdfplumber)
       │                 ├── Semantic Chunking (RecursiveSplitter)
       │                 └── Batch Vector Embeddings (Gemini/OpenAI)
       ▼
[PostgreSQL 16 + pgvector] (Strict Tenant Isolation via user_id)
       │
       ▼
[Hybrid Retrieval Engine]
       ├── Vector Search: pgvector Cosine Distance
       ├── Lexical Search: PostgreSQL tsvector (Full-Text)
       └── Fusion: Reciprocal Rank Fusion (RRF Rank Scoring)
       │
       ▼
[SSE Token Stream Generator] ──► Verified Page Citations + LLM Stream`,
        simulatorType: "rag"
      },
      {
        id: "emotion",
        title: "Emotion Scanner",
        category: "NLP DEEP LEARNING & INFERENCE",
        status: "LIVE WEB APPLICATION",
        statusColor: "cyan",
        liveUrl: "https://emotion-predictor-j013.onrender.com/",
        githubUrl: "https://github.com/Rushikesh282006/Emotion_Predictor.git",
        summary: "Real-time semantic NLP emotion detection web application powered by a custom Bidirectional GRU (Bi-GRU) neural network model deployed via TensorFlow Lite with a FastAPI backend. Classifies textual nuances across six distinct emotional dimensions (Joy, Sadness, Love, Anger, Fear, Surprise) with instantaneous confidence scoring and full probability spectrum distributions.",
        techStack: ["Python 3.11", "FastAPI", "TensorFlow / Keras", "Bidirectional GRU", "TF Lite", "Uvicorn", "Vanilla JS"],
        metrics: [
          { label: "Emotion Classes", value: "6 Categories" },
          { label: "Architecture", value: "Bi-GRU (TF Lite)" },
          { label: "Inference Latency", value: "<100ms" }
        ],
        art: "dusk",
        folderMeta: "Bi-GRU Neural Net · TF Lite",
        files: [
          { name: "Bi_GRU_Model.keras", meta: "Bidirectional GRU Layer", art: "dusk" },
          { name: "Emotion_Classes.json", meta: "6-state Softmax output" },
          { name: "Inference_API.py", meta: "FastAPI /predict endpoint", art: "aurora" },
          { name: "Instrument_UI.html", meta: "Real-time spectrum panel" }
        ],
        specCode: `[Raw Text Input (up to 2000 chars)]
       │
       ▼
[Keras Tokenizer & Padding Preprocessing Matrix]
       │
       ▼
[Bidirectional GRU (Bi-GRU) Hidden Layers]
       │
       ▼
[Dense Softmax Probability Distribution (6 Emotion States)]
       ├── 1. Joy (Optimism / Euphoria)
       ├── 2. Sadness (Grief / Melancholy)
       ├── 3. Love (Affection / Warmth)
       ├── 4. Anger (Hostility / Outrage)
       ├── 5. Fear (Anxiety / Apprehension)
       └── 6. Surprise (Shock / Wonder)
       │
       ▼
[FastAPI /predict JSON Response with Confidence Percentages]`,
        simulatorType: "emotion"
      },
      {
        id: "houseprice",
        title: "House Price Predictor",
        category: "APPLIED ML & REGRESSION API",
        status: "END-TO-END PIPELINE",
        statusColor: "amber",
        liveUrl: "https://house-price-predictor-gd9p.onrender.com/",
        githubUrl: "https://github.com/Rushikesh282006/House_Price_Predictor.git",
        summary: "End-to-end Machine Learning deployment pipeline predicting California residential property values from census metrics using a trained RandomForestRegressor (200 estimators, R² ~0.805, MAE ~$32,800). Serves high-throughput prediction endpoints with Pydantic schema validation, sample California presets, and batch CSV processing capabilities.",
        techStack: ["Python", "Scikit-Learn", "FastAPI", "Pydantic", "Joblib", "NumPy", "Pandas", "Matplotlib"],
        metrics: [
          { label: "Algorithm", value: "Random Forest (200)" },
          { label: "Accuracy", value: "R² 0.805 · MAE $32.8k" },
          { label: "Dataset", value: "20,640 Block Groups" }
        ],
        art: "ember",
        folderMeta: "RandomForest · Scikit-Learn",
        files: [
          { name: "RandomForest.joblib", meta: "200 Estimators · R² 0.805", art: "ember" },
          { name: "Census_Dataset.csv", meta: "20,640 Block Groups" },
          { name: "Batch_Pipeline.py", meta: "FastAPI + Pydantic + CSV", art: "dusk" },
          { name: "Dashboard_UI.html", meta: "Dynamic feature sliders" }
        ],
        specCode: `[Census Feature Vector: MedInc, HouseAge, AveRooms, AveOccup, Geo]
       │
       ▼
[Pydantic Validation & Standard Scaler Transformation Pipeline]
       │
       ▼
[Ensemble RandomForestRegressor (200 Estimators, R²=0.805)]
       │
       ▼
[Unit Multiplier & Currency Normalization Engine ($100k Multiplier)]
       │
       ▼
[FastAPI REST API Single / Batch CSV Predictions ($ Valuation)]`,
        simulatorType: "housing"
      }
    ];

    let currentProjectIdx = 0;
    let activeProjectView = "impact";

    /* ==========================================================================
       TYPEWRITER EFFECT IN HERO
       ========================================================================== */
    const subtitles = [
      "Backend Engineer",
      "Machine Learning Engineer",
      "AI Integration Specialist"
    ];
    let subtitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById("hero-typewriter");

    function typeWriterLoop() {
      const currentText = subtitles[subtitleIndex];
      if (isDeleting) {
        typewriterEl.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 38 : 78;

      if (!isDeleting && charIndex === currentText.length) {
        speed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        speed = 400;
      }

      setTimeout(typeWriterLoop, speed);
    }
    typeWriterLoop();

    /* ==========================================================================
       SUPERMODELS CURSOR LOOP & ACCENTS
       ========================================================================== */
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    const cursorBadge = document.getElementById("cursor-badge");
    let cPos = { x: -100, y: -100 };
    let rPos = { x: -100, y: -100 };

    window.addEventListener("mousemove", (e) => {
      cPos.x = e.clientX;
      cPos.y = e.clientY;
      cursorDot.style.left = `${cPos.x}px`;
      cursorDot.style.top = `${cPos.y}px`;
      cursorBadge.style.left = `${cPos.x}px`;
      cursorBadge.style.top = `${cPos.y}px`;

      // Dynamically match pointer & cursor color to the section currently under the cursor
      const hoveredSec = e.target && e.target.closest ? e.target.closest("section") : null;
      if (hoveredSec && hoveredSec.id && sectionThemes[hoveredSec.id]) {
        const theme = sectionThemes[hoveredSec.id];
        if (theme && theme.accent) {
          setGlobalAccent(theme.accent);
        }
      }
    });

    function ringLoop() {
      rPos.x += (cPos.x - rPos.x) * 0.22;
      rPos.y += (cPos.y - rPos.y) * 0.22;
      cursorRing.style.left = `${rPos.x}px`;
      cursorRing.style.top = `${rPos.y}px`;
      requestAnimationFrame(ringLoop);
    }
    ringLoop();

    function attachCursorHandlers() {
      document.querySelectorAll(".interactive-target, a, button, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const badge = el.getAttribute("data-badge") || "SELECT";
          cursorBadge.innerText = badge;
          cursorBadge.style.opacity = "1";
          document.body.classList.add("cursor-hover");
        });
        el.addEventListener("mouseleave", () => {
          cursorBadge.style.opacity = "0";
          document.body.classList.remove("cursor-hover");
          document.body.classList.remove("cursor-action");
        });
      });
    }
    attachCursorHandlers();

    document.querySelectorAll(".cert-action-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const href = btn.getAttribute("href");
        if (!href || href === "#") {
          e.preventDefault();
          const certName = btn.closest(".uiverse-cert-card")?.querySelector(".card_title")?.innerText || "Certificate";
          showToast(`URL pending: Link for ${certName} will open here`);
        }
      });
    });

    function setGlobalAccent(hexColor) {
      if (!hexColor) return;
      document.documentElement.style.setProperty("--active-cursor-color", hexColor);
      document.documentElement.style.setProperty("--active-cursor-border", hexColor + "99");
      document.documentElement.style.setProperty("--active-cursor-bg", hexColor + "22");
      document.documentElement.style.setProperty("--active-cursor-subtle-bg", hexColor + "0d");
    }

    /* ==========================================================================
       DYNAMIC SECTION SCROLL MOOD SHIFT & REVEAL BLOOM
       ========================================================================== */
    const sections = document.querySelectorAll("section");
    const hudPips = document.querySelectorAll(".hud-pip");
    const blobPrimary = document.getElementById("blob-primary");
    const blobSecondary = document.getElementById("blob-secondary");
    const blobAccent = document.getElementById("blob-accent");

    const sectionThemes = {
      hero: {
        bodyBg: "#060913",
        pColor: "rgba(56, 189, 248, 0.45)",
        sColor: "rgba(99, 102, 241, 0.35)",
        aColor: "rgba(20, 184, 166, 0.28)",
        pPos: "translate(0px, 0px)",
        accent: "#38bdf8"
      },
      about: {
        bodyBg: "#0b0c22",
        pColor: "rgba(129, 140, 248, 0.48)",
        sColor: "rgba(99, 102, 241, 0.38)",
        aColor: "rgba(56, 189, 248, 0.3)",
        pPos: "translate(-80px, 120px)",
        accent: "#818cf8"
      },
      education: {
        bodyBg: "#061024",
        pColor: "rgba(59, 130, 246, 0.48)",
        sColor: "rgba(14, 165, 233, 0.38)",
        aColor: "rgba(99, 102, 241, 0.32)",
        pPos: "translate(80px, -60px)",
        accent: "#3b82f6"
      },
      stack: {
        bodyBg: "#12081f",
        pColor: "rgba(192, 132, 252, 0.45)",
        sColor: "rgba(236, 72, 153, 0.35)",
        aColor: "rgba(139, 92, 246, 0.35)",
        pPos: "translate(50px, 90px)",
        accent: "#c084fc"
      },
      projects: {
        bodyBg: "#041712",
        pColor: "rgba(16, 185, 129, 0.48)",
        sColor: "rgba(45, 212, 191, 0.4)",
        aColor: "rgba(5, 150, 105, 0.35)",
        pPos: "translate(-60px, -50px)",
        accent: "#10b981"
      },
      achievements: {
        bodyBg: "#160e05",
        pColor: "rgba(251, 191, 36, 0.48)",
        sColor: "rgba(249, 115, 22, 0.38)",
        aColor: "rgba(217, 119, 6, 0.32)",
        pPos: "translate(40px, 70px)",
        accent: "#f59e0b"
      },
      certifications: {
        bodyBg: "#050914",
        pColor: "rgba(56, 189, 248, 0.45)",
        sColor: "rgba(99, 102, 241, 0.35)",
        aColor: "rgba(14, 165, 233, 0.3)",
        pPos: "translate(-40px, 40px)",
        accent: "#38bdf8"
      },
      contact: {
        bodyBg: "#11071c",
        pColor: "rgba(192, 132, 252, 0.45)",
        sColor: "rgba(168, 85, 247, 0.35)",
        aColor: "rgba(236, 72, 153, 0.28)",
        pPos: "translate(0px, -30px)",
        accent: "#c084fc"
      }
    };

    /* ==========================================================================
       SYNCHRONIZED ACTIVE SECTION CONTROLLER & APPLE TAHOE LIQUID GLASS NAV
       ========================================================================== */
    const liquidNav = document.getElementById("navbar-liquid-nav");
    const liquidIndicator = document.getElementById("liquid-glass-indicator");
    const navTabLinks = document.querySelectorAll(".nav-tab-link");
    const brandHomeLink = document.querySelector('header a[href="#hero"]');

    let currentActiveNavId = "hero";
    let isNavClickScrolling = false;
    let navScrollTimeout = null;

    function updateLiquidGlassNav(targetId, isTemporary = false) {
      if (!liquidNav || !liquidIndicator) return;
      const targetTab = Array.from(navTabLinks).find(tab => tab.getAttribute("data-target") === targetId);

      if (targetTab) {
        if (!isTemporary) {
          currentActiveNavId = targetId;
          navTabLinks.forEach(tab => {
            if (tab === targetTab) tab.classList.add("active");
            else tab.classList.remove("active");
          });
        }
        
        const navRect = liquidNav.getBoundingClientRect();
        const tabRect = targetTab.getBoundingClientRect();
        const left = tabRect.left - navRect.left;
        const width = tabRect.width;

        if (width > 0) {
          liquidIndicator.style.opacity = "1";
          liquidIndicator.style.width = `${width}px`;
          liquidIndicator.style.transform = `translateX(${left}px)`;
        }
      } else if (!isTemporary) {
        currentActiveNavId = null;
        navTabLinks.forEach(tab => tab.classList.remove("active"));
        liquidIndicator.style.opacity = "0";
      }
    }

    function setActiveSection(sId) {
      if (!sId) return;
      currentActiveNavId = sId;

      // 1. Shift atmospheric themes & background mood
      const theme = sectionThemes[sId];
      if (theme) {
        document.body.style.backgroundColor = theme.bodyBg;
        if (blobPrimary) {
          blobPrimary.style.background = `radial-gradient(circle, ${theme.pColor} 0%, transparent 70%)`;
          blobPrimary.style.transform = theme.pPos;
        }
        if (blobSecondary) {
          blobSecondary.style.background = `radial-gradient(circle, ${theme.sColor} 0%, transparent 70%)`;
        }
        if (blobAccent) {
          blobAccent.style.background = `radial-gradient(circle, ${theme.aColor} 0%, transparent 70%)`;
        }
        setGlobalAccent(theme.accent);
      }

      // 2. Synchronize vertical HUD stepper pips
      hudPips.forEach((pip) => {
        if (pip.getAttribute("data-target") === sId) {
          pip.classList.add("active");
        } else {
          pip.classList.remove("active");
        }
      });

      // 3. Glide Apple Tahoe Liquid Glass Nav Indicator
      updateLiquidGlassNav(sId, false);
    }

    // Determine the section currently commanding user attention
    function getDominantSection() {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Top of page: strictly hero / nexus
      if (scrollY < 180) {
        return "hero";
      }

      // Bottom of page: strictly contact / dispatch
      if (scrollY + vh >= docHeight - 75) {
        return "contact";
      }

      // Natural reading focal point (38% down the viewport)
      const focalY = scrollY + (vh * 0.38);
      const secArray = Array.from(sections);

      for (let i = secArray.length - 1; i >= 0; i--) {
        const sec = secArray[i];
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (focalY >= top && focalY < bottom) {
          return sec.getAttribute("id");
        }
      }

      // Fallback: check section with highest visible area in viewport
      let bestId = "hero";
      let maxVis = -1;
      secArray.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const visTop = Math.max(0, rect.top);
        const visBottom = Math.min(vh, rect.bottom);
        const visHeight = Math.max(0, visBottom - visTop);
        if (visHeight > maxVis) {
          maxVis = visHeight;
          bestId = sec.getAttribute("id");
        }
      });

      return bestId;
    }

    function syncActiveSectionFromScroll() {
      if (isNavClickScrolling) return;
      const dominantId = getDominantSection();
      if (dominantId && dominantId !== currentActiveNavId) {
        setActiveSection(dominantId);
      }
    }

    // Smooth navigation click with scroll lock (prevents intermediate section flickering)
    function handleNavClick(targetId, e) {
      if (!targetId) return;
      if (e) e.preventDefault();

      isNavClickScrolling = true;
      clearTimeout(navScrollTimeout);

      // Immediately jump indicator and pips to clicked section
      setActiveSection(targetId);

      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 70;
          const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }

      // Unlock after scroll finishes
      const unlock = () => {
        isNavClickScrolling = false;
        syncActiveSectionFromScroll();
        window.removeEventListener("scrollend", unlock);
      };

      if ("onscrollend" in window) {
        window.addEventListener("scrollend", unlock, { once: true });
      }
      navScrollTimeout = setTimeout(unlock, 850);
    }

    // Attach click and hover handlers to Tahoe navbar links
    navTabLinks.forEach(tab => {
      tab.addEventListener("mouseenter", () => {
        updateLiquidGlassNav(tab.getAttribute("data-target"), true);
      });
      tab.addEventListener("click", (e) => {
        handleNavClick(tab.getAttribute("data-target"), e);
      });
    });

    if (liquidNav) {
      liquidNav.addEventListener("mouseleave", () => {
        updateLiquidGlassNav(currentActiveNavId, false);
      });
    }

    // Brand logo click
    if (brandHomeLink) {
      brandHomeLink.addEventListener("click", (e) => {
        handleNavClick("hero", e);
      });
    }

    // Vertical HUD pips click
    hudPips.forEach(pip => {
      pip.addEventListener("click", (e) => {
        handleNavClick(pip.getAttribute("data-target"), e);
      });
    });

    // Window resize & font ready calibration
    window.addEventListener("resize", () => {
      updateLiquidGlassNav(currentActiveNavId, false);
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateLiquidGlassNav(currentActiveNavId, false);
      });
    }

    // Initial load calibration
    const initialHash = window.location.hash.replace("#", "");
    const initialTarget = (initialHash && document.getElementById(initialHash)) ? initialHash : "hero";
    setActiveSection(initialTarget);
    setTimeout(() => {
      setActiveSection(getDominantSection());
    }, 120);

    const revealNodes = document.querySelectorAll(".reveal-node");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    revealNodes.forEach((node) => revealObserver.observe(node));

    /* ==========================================================================
       ACETERNITY UI CONTAINER SCROLL 3D TILT ENGINE
       (Dynamically interpolates each section card from tilted 3D perspective to flat 0deg)
       ========================================================================== */
    const containerScrollCards = document.querySelectorAll(".container-scroll-card");

    function updateContainerScrollAnimations() {
      const vh = window.innerHeight;
      
      containerScrollCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top;
        const start = vh * 0.96;
        const end = vh * 0.22;
        
        let progress = (start - cardTop) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        
        const rotateX = (1 - progress) * 15;
        const scale = 0.93 + progress * 0.07;
        const translateY = (1 - progress) * 35;
        const opacity = 0.65 + progress * 0.35;
        
        card.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`;
        card.style.opacity = opacity.toFixed(2);
      });
    }

    let isScrollTicking = false;
    window.addEventListener("scroll", () => {
      if (!isScrollTicking) {
        window.requestAnimationFrame(() => {
          syncActiveSectionFromScroll();
          updateContainerScrollAnimations();
          isScrollTicking = false;
        });
        isScrollTicking = true;
      }
    }, { passive: true });

    window.addEventListener("resize", () => {
      updateContainerScrollAnimations();
      syncActiveSectionFromScroll();
    }, { passive: true });
    updateContainerScrollAnimations();

    /* ==========================================================================
       GLOBAL AMBIENT CONTOURS CANVAS
       ========================================================================== */
    const canvas = document.getElementById("ambient-canvas");
    const ctx = canvas.getContext("2d");
    let width, height;
    let time = 0;
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    window.addEventListener("mousemove", (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    });

    function renderAmbientCanvas() {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      time += 0.0016;

      const numLines = 18;
      const step = height / numLines;

      for (let i = 0; i < numLines; i++) {
        const baseY = i * step;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 + (i / numLines) * 0.035})`;
        ctx.lineWidth = 1;

        const res = 26;
        for (let x = 0; x <= width + res; x += res) {
          const wave = Math.sin(x * 0.0016 + time * 0.5) * Math.cos(baseY * 0.0016 + time * 0.4);
          const dx = x - mouse.x;
          const dy = baseY - mouse.y;
          const distSq = dx * dx + dy * dy;
          let disp = 0;
          if (distSq < 150000) {
            disp = (1 - distSq / 150000) * 0.75;
          }
          const y = baseY + (wave + disp) * 24;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      requestAnimationFrame(renderAmbientCanvas);
    }
    renderAmbientCanvas();

    /* ==========================================================================
       FLUID PARTICLES ENGINE (BUNDUI 21ST.DEV SPECIFICATION)
       Organic fluid dynamics simulation with multi-harmonic curl vector field,
       cursor fluid vortex & wake impulse, golden filament bridges, and amber luminosity
       Themed for Hackathons: Warm Amber (#f59e0b, #fbbf24, #d97706, #fef08a)
       ========================================================================== */
    (function initFluidParticles() {
      const section = document.getElementById("achievements");
      const canvas = document.getElementById("hackathons-fluid-canvas");
      if (!section || !canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let dpr = 1;
      let animationFrameId = null;
      let isVisible = true;
      let time = 0;

      // Mouse state tracking within section
      const mouse = {
        x: -2000,
        y: -2000,
        vx: 0,
        vy: 0,
        prevX: -2000,
        prevY: -2000,
        isActive: false
      };

      // Amber / Gold theme color palette
      const colors = [
        { r: 245, g: 158, b: 11 },   // Amber 500 (#f59e0b)
        { r: 251, g: 191, b: 36 },   // Amber 400 (#fbbf24)
        { r: 252, g: 211, b: 77 },   // Amber 300 (#fcd34d)
        { r: 217, g: 119, b: 6 },    // Amber 600 (#d97706)
        { r: 254, g: 240, b: 138 }   // Amber 200 / Gold Light (#fef08a)
      ];

      function resize() {
        const rect = section.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      const resizeObserver = new ResizeObserver(() => {
        resize();
        initParticles();
      });
      resizeObserver.observe(section);

      // Section visibility optimization
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            loop();
          }
        });
      }, { threshold: 0.05 });
      intersectionObserver.observe(section);

      // Mouse listeners
      section.addEventListener("mousemove", (e) => {
        const rect = section.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;

        if (mouse.prevX !== -2000) {
          mouse.vx = currentX - mouse.prevX;
          mouse.vy = currentY - mouse.prevY;
        }
        mouse.prevX = currentX;
        mouse.prevY = currentY;
        mouse.x = currentX;
        mouse.y = currentY;
        mouse.isActive = true;
      }, { passive: true });

      section.addEventListener("mouseleave", () => {
        mouse.x = -2000;
        mouse.y = -2000;
        mouse.prevX = -2000;
        mouse.prevY = -2000;
        mouse.vx = 0;
        mouse.vy = 0;
        mouse.isActive = false;
      }, { passive: true });

      let particles = [];
      const PARTICLE_COUNT = 90;

      class FluidParticle {
        constructor(isInitial = false) {
          this.reset(isInitial);
        }

        reset(isInitial = false) {
          this.x = isInitial ? Math.random() * width : (Math.random() < 0.5 ? -10 : width + 10);
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.8;
          this.vy = (Math.random() - 0.5) * 0.8;
          this.size = Math.random() * 2.2 + 1.2;
          this.baseAlpha = Math.random() * 0.45 + 0.35;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.pulseOffset = Math.random() * Math.PI * 2;
          this.mass = this.size * 0.8;
        }

        update() {
          // 1. Organic Fluid Flow Field calculation (curl/harmonic stream vectors)
          const scale = 0.0022;
          const angle = Math.sin(this.x * scale + time * 0.35) * Math.cos(this.y * scale + time * 0.28) * Math.PI * 3;
          const flowSpeed = 0.65;
          const targetVx = Math.cos(angle) * flowSpeed;
          const targetVy = Math.sin(angle) * flowSpeed;

          // Viscous fluid acceleration towards flow field
          this.vx += (targetVx - this.vx) * 0.04;
          this.vy += (targetVy - this.vy) * 0.04;

          // 2. Interactive Cursor Fluid Wake & Vortex
          if (mouse.isActive) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influenceRadius = 180;

            if (dist < influenceRadius && dist > 1) {
              const force = (1 - dist / influenceRadius);
              // Radial push away from cursor
              const pushX = (dx / dist) * force * 3.2;
              const pushY = (dy / dist) * force * 3.2;

              // Tangential vortex spin around cursor
              const vortexX = (-dy / dist) * force * 2.0;
              const vortexY = (dx / dist) * force * 2.0;

              // Fluid wake injection from mouse velocity
              const wakeX = mouse.vx * 0.08 * force;
              const wakeY = mouse.vy * 0.08 * force;

              this.vx += (pushX + vortexX + wakeX) / this.mass;
              this.vy += (pushY + vortexY + wakeY) / this.mass;
            }
          }

          // Fluid viscosity / drag
          this.vx *= 0.965;
          this.vy *= 0.965;

          // Position update
          this.x += this.vx;
          this.y += this.vy;

          // Smooth edge wrapping
          const pad = 20;
          if (this.x < -pad) this.x = width + pad;
          if (this.x > width + pad) this.x = -pad;
          if (this.y < -pad) this.y = height + pad;
          if (this.y > height + pad) this.y = -pad;
        }

        draw() {
          const alphaPulse = this.baseAlpha + Math.sin(time * 3 + this.pulseOffset) * 0.15;
          const alpha = Math.max(0.1, Math.min(0.95, alphaPulse));
          const { r, g, b } = this.color;

          // Glowing fluid particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.75)`;
          ctx.shadowBlur = 8;
          ctx.fill();
        }
      }

      function initParticles() {
        particles = [];
        const count = Math.min(PARTICLE_COUNT, Math.floor((width * height) / 9500) || 70);
        for (let i = 0; i < count; i++) {
          particles.push(new FluidParticle(true));
        }
      }

      function loop() {
        if (!isVisible) {
          animationFrameId = null;
          return;
        }

        time += 0.015;
        // Decay mouse velocity
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;

        ctx.clearRect(0, 0, width, height);

        // Update all particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
        }

        // Draw interconnecting fluid filament bridges between nearby particles
        ctx.shadowBlur = 0;
        const maxDist = 95;
        const maxDistSq = maxDist * maxDist;

        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              const filamentAlpha = (1 - dist / maxDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(245, 158, 11, ${filamentAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        // Draw individual glowing fluid particles
        for (let i = 0; i < particles.length; i++) {
          particles[i].draw();
        }

        animationFrameId = requestAnimationFrame(loop);
      }

      resize();
      initParticles();
      loop();
    })();

    /* ==========================================================================
       GRADIENT DOTS ENGINE (EFFERD 21ST.DEV SPECIFICATION - DURATION: 20S)
       Interactive shimmering dot matrix with multi-color shifting cyan/sapphire
       gradients and cursor proximity illumination
       ========================================================================== */
    (function initGradientDots() {
      const section = document.getElementById("certifications");
      const cursorGlow = document.getElementById("cert-cursor-glow");
      if (!section || !cursorGlow) return;

      section.addEventListener("mousemove", (e) => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cursorGlow.style.left = `${x}px`;
        cursorGlow.style.top = `${y}px`;
        cursorGlow.style.opacity = "1";
      }, { passive: true });

      section.addEventListener("mouseleave", () => {
        cursorGlow.style.opacity = "0";
      }, { passive: true });
    })();

    /* ==========================================================================
       HALFTONE WORDMARK FOOTER ENGINE (KEDHARESWER NAIDU 21ST.DEV SPECIFICATION)
       Interactive physics-driven halftone typography with spring restitution,
       cursor repulsion, dynamic color shifting, and click shockwave ripples
       ========================================================================== */
    (function initHalftoneWordmarkFooter() {
      const container = document.getElementById("halftone-wordmark-container");
      const canvas = document.getElementById("halftone-wordmark-canvas");
      const footer = document.getElementById("site-footer");
      if (!canvas || !container || !footer) return;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let dpr = 1;

      let dots = [];
      let ripples = [];
      let mouse = { x: -2000, y: -2000, active: false };
      let isVisible = false;
      let animFrameId = null;

      // Track footer visibility with IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animFrameId) {
          lastTime = performance.now();
          animFrameId = requestAnimationFrame(animate);
        }
      }, { threshold: 0.05 });
      observer.observe(footer);

      function buildWordmarkGrid() {
        const rect = container.getBoundingClientRect();
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = Math.floor(rect.width * dpr);
        height = Math.floor(rect.height * dpr);

        if (width === 0 || height === 0) return;

        canvas.width = width;
        canvas.height = height;

        // Render typography into offscreen canvas for dot rasterization
        const offCanvas = document.createElement("canvas");
        offCanvas.width = width;
        offCanvas.height = height;
        const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });

        offCtx.fillStyle = "#000000";
        offCtx.fillRect(0, 0, width, height);

        // Wordmark text sizing & optical vertical centering
        const wordmarkText = "RUSHIKESH";
        const targetTextWidth = width * 0.92;
        let fontSize = Math.floor(targetTextWidth / (wordmarkText.length * 0.62));
        const maxFontHeight = Math.floor(height * 0.74);

        offCtx.font = `900 ${fontSize}px "Space Grotesk", "Plus Jakarta Sans", -apple-system, sans-serif`;
        const measured = offCtx.measureText(wordmarkText).width;
        if (measured > 0) {
          fontSize = Math.floor(fontSize * (targetTextWidth / measured));
        }
        if (fontSize > maxFontHeight) {
          fontSize = maxFontHeight;
        }

        offCtx.font = `900 ${fontSize}px "Space Grotesk", "Plus Jakarta Sans", -apple-system, sans-serif`;
        offCtx.textAlign = "center";
        offCtx.textBaseline = "middle";

        // Center vertically with balanced breathing room
        const centerY = Math.floor(height * 0.50);

        offCtx.fillStyle = "#ffffff";
        offCtx.fillText(wordmarkText, width / 2, centerY);

        const imgData = offCtx.getImageData(0, 0, width, height).data;

        // Grid spacing in logical pixels
        const spacing = Math.max(9, Math.floor(12 * dpr));
        const newDots = [];

        for (let y = spacing / 2; y < height; y += spacing) {
          for (let x = spacing / 2; x < width; x += spacing) {
            const px = Math.floor(x);
            const py = Math.floor(y);
            const idx = (py * width + px) * 4;
            const brightness = imgData[idx] || 0;

            const isText = brightness > 35;
            let baseRadius;
            let alpha;

            if (isText) {
              baseRadius = 1.6 * dpr + (brightness / 255) * (2.8 * dpr);
              alpha = 0.55 + (brightness / 255) * 0.45;
            } else {
              baseRadius = 0.8 * dpr;
              alpha = 0.08;
            }

            // Gradient across wordmark: Electric Purple (#c084fc) to Cyan (#38bdf8)
            const ratioX = x / width;
            const r = Math.floor(192 + ratioX * (56 - 192));
            const g = Math.floor(132 + ratioX * (189 - 132));
            const b = Math.floor(252 + ratioX * (248 - 252));

            newDots.push({
              x: x,
              y: y,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              isText: isText,
              baseRadius: baseRadius,
              currentRadius: baseRadius,
              targetRadius: baseRadius,
              alpha: alpha,
              color: `rgb(${r}, ${g}, ${b})`,
              glowIntensity: 0
            });
          }
        }

        dots = newDots;
      }

      window.addEventListener("resize", () => {
        buildWordmarkGrid();
      }, { passive: true });

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          buildWordmarkGrid();
        });
      }

      setTimeout(buildWordmarkGrid, 150);

      // Pointer event listeners on wordmark canvas
      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        mouse.x = (e.clientX - rect.left) * dpr;
        mouse.y = (e.clientY - rect.top) * dpr;
        mouse.active = true;
      }, { passive: true });

      container.addEventListener("mouseleave", () => {
        mouse.active = false;
        mouse.x = -2000;
        mouse.y = -2000;
      }, { passive: true });

      // Click shockwave ripple
      container.addEventListener("click", (e) => {
        const rect = container.getBoundingClientRect();
        const clickX = (e.clientX - rect.left) * dpr;
        const clickY = (e.clientY - rect.top) * dpr;

        ripples.push({
          x: clickX,
          y: clickY,
          radius: 0,
          maxRadius: Math.max(width, height) * 0.8,
          speed: 12 * dpr,
          thickness: 35 * dpr,
          strength: 1.0
        });
      });

      // Hook up Back to Top button
      const backToTopBtn = document.getElementById("footer-back-to-top");
      if (backToTopBtn && typeof handleNavClick === "function") {
        backToTopBtn.addEventListener("click", (e) => {
          handleNavClick("hero", e);
        });
      }

      // Hook up footer directory links
      document.querySelectorAll(".footer-nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
          const targetId = link.getAttribute("data-target");
          if (targetId && typeof handleNavClick === "function") {
            handleNavClick(targetId, e);
          }
        });
      });

      let lastTime = performance.now();
      let waveTimer = 0;

      function animate(now) {
        if (!isVisible) {
          animFrameId = null;
          return;
        }

        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;
        waveTimer += dt * 0.8;

        ctx.clearRect(0, 0, width, height);

        // Update active click shockwaves
        for (let i = ripples.length - 1; i >= 0; i--) {
          const rip = ripples[i];
          rip.radius += rip.speed;
          rip.strength = 1 - rip.radius / rip.maxRadius;
          if (rip.strength <= 0) {
            ripples.splice(i, 1);
          }
        }

        const mouseRadius = 140 * dpr;
        const springK = 0.07;
        const damping = 0.82;

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];

          // 1. Spring restitution force back to origin
          const fx = (dot.originX - dot.x) * springK;
          const fy = (dot.originY - dot.y) * springK;

          dot.vx = (dot.vx + fx) * damping;
          dot.vy = (dot.vy + fy) * damping;

          // 2. Cursor repulsion physics
          let hoverFactor = 0;
          if (mouse.active) {
            const dx = dot.x - mouse.x;
            const dy = dot.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouseRadius && dist > 0) {
              hoverFactor = 1 - dist / mouseRadius;
              const push = hoverFactor * hoverFactor * 9.5 * dpr;
              const angle = Math.atan2(dy, dx);
              dot.vx += Math.cos(angle) * push;
              dot.vy += Math.sin(angle) * push;
            }
          }

          // 3. Shockwave ripple impulse
          let rippleFactor = 0;
          for (let r = 0; r < ripples.length; r++) {
            const rip = ripples[r];
            const rdx = dot.x - rip.x;
            const rdy = dot.y - rip.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const deltaR = Math.abs(rdist - rip.radius);

            if (deltaR < rip.thickness) {
              const ringForce = (1 - deltaR / rip.thickness) * rip.strength;
              rippleFactor = Math.max(rippleFactor, ringForce);
              const rAngle = Math.atan2(rdy, rdx);
              dot.vx += Math.cos(rAngle) * ringForce * 8 * dpr;
              dot.vy += Math.sin(rAngle) * ringForce * 8 * dpr;
            }
          }

          // Position update
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Dynamic radius modulation
          const ambientWave = dot.isText ? Math.sin(dot.originX * 0.015 + waveTimer) * 0.35 * dpr : 0;
          const targetR = dot.baseRadius + hoverFactor * 3.5 * dpr + rippleFactor * 4 * dpr + ambientWave;
          dot.currentRadius += (targetR - dot.currentRadius) * 0.18;

          // Color illumination on interaction
          const interactionGlow = Math.max(hoverFactor, rippleFactor);
          dot.glowIntensity += (interactionGlow - dot.glowIntensity) * 0.2;

          // Render dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, Math.max(0.4, dot.currentRadius), 0, Math.PI * 2);

          if (dot.isText) {
            if (dot.glowIntensity > 0.05) {
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, dot.alpha + dot.glowIntensity * 0.3)})`;
              ctx.shadowColor = "rgba(192, 132, 252, 0.7)";
              ctx.shadowBlur = 8 * dpr * dot.glowIntensity;
            } else {
              ctx.fillStyle = dot.color;
              ctx.globalAlpha = dot.alpha;
              ctx.shadowBlur = 0;
            }
          } else {
            ctx.fillStyle = "rgba(148, 163, 184, 0.12)";
            ctx.globalAlpha = dot.alpha + interactionGlow * 0.3;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
          ctx.globalAlpha = 1.0;
        }

        animFrameId = requestAnimationFrame(animate);
      }
    })();

    /* ==========================================================================
       ABOUT SECTION: HIGH-VISIBILITY INTERACTIVE NEURAL GRAPH (45+ NODES)
       ========================================================================== */
    const aboutCanvas = document.getElementById("about-neural-canvas");
    const aboutCtx = aboutCanvas.getContext("2d");
    let aboutW, aboutH;
    let aboutMouse = { x: -2000, y: -2000, active: false };

    function resizeAboutCanvas() {
      const rect = aboutCanvas.parentElement.getBoundingClientRect();
      aboutW = aboutCanvas.width = rect.width;
      aboutH = aboutCanvas.height = rect.height;
    }
    window.addEventListener("resize", resizeAboutCanvas);
    setTimeout(resizeAboutCanvas, 200);

    aboutCanvas.addEventListener("mousemove", (e) => {
      const rect = aboutCanvas.getBoundingClientRect();
      aboutMouse.x = e.clientX - rect.left;
      aboutMouse.y = e.clientY - rect.top;
      aboutMouse.active = true;
    });

    aboutCanvas.addEventListener("mouseleave", () => {
      aboutMouse.active = false;
    });

    const nodeLabels = [
      "Python", "FastAPI", "Pillai IT", "CGPA 9.7", "RAG Engine", 
      "Vector DB", "Chroma", "Pinecone", "Bi-GRU", "GNN Fraud", 
      "LangChain", "Docker", "PostgreSQL", "AsyncIO", "SIH Qualifier",
      "Rank #2 IT", "LeetCode 100+", "Ollama Qwen", "DeepSeek", "TensorFlow",
      "HSC 85%", "SSC 89.6%", "Pandas", "Scikit-Learn", "REST APIs"
    ];

    const neuralNodes = [];
    const NUM_NODES = 48;

    for (let i = 0; i < NUM_NODES; i++) {
      neuralNodes.push({
        x: Math.random() * (window.innerWidth || 1200),
        y: Math.random() * 850,
        vx: (Math.random() - 0.5) * 0.85,
        vy: (Math.random() - 0.5) * 0.85,
        radius: Math.random() * 3 + 2.5,
        label: i < nodeLabels.length ? nodeLabels[i] : null,
        hue: i % 3 === 0 ? "129, 140, 248" : (i % 3 === 1 ? "56, 189, 248" : "192, 132, 252")
      });
    }

    function renderAboutNeuralConstellation() {
      if (!aboutW || !aboutH) {
        requestAnimationFrame(renderAboutNeuralConstellation);
        return;
      }

      aboutCtx.clearRect(0, 0, aboutW, aboutH);

      for (let i = 0; i < neuralNodes.length; i++) {
        const node = neuralNodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 15 || node.x > aboutW - 15) node.vx *= -1;
        if (node.y < 15 || node.y > aboutH - 15) node.vy *= -1;

        if (aboutMouse.active) {
          const dx = aboutMouse.x - node.x;
          const dy = aboutMouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 0) {
            const force = (200 - dist) / 200 * 0.05;
            node.x += dx * force;
            node.y += dy * force;
          }
        }

        aboutCtx.beginPath();
        aboutCtx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        aboutCtx.fillStyle = `rgba(${node.hue}, 0.95)`;
        aboutCtx.shadowColor = `rgba(${node.hue}, 1)`;
        aboutCtx.shadowBlur = 14;
        aboutCtx.fill();
        aboutCtx.shadowBlur = 0;

        if (node.label) {
          aboutCtx.font = "bold 10.5px 'JetBrains Mono', monospace";
          aboutCtx.fillStyle = `rgba(241, 245, 249, 0.9)`;
          aboutCtx.shadowColor = "rgba(0,0,0,0.9)";
          aboutCtx.shadowBlur = 4;
          aboutCtx.fillText(node.label, node.x + node.radius + 6, node.y + 3.5);
          aboutCtx.shadowBlur = 0;
        }

        for (let j = i + 1; j < neuralNodes.length; j++) {
          const other = neuralNodes[j];
          const distDx = node.x - other.x;
          const distDy = node.y - other.y;
          const distance = Math.sqrt(distDx * distDx + distDy * distDy);

          if (distance < 140) {
            aboutCtx.beginPath();
            aboutCtx.moveTo(node.x, node.y);
            aboutCtx.lineTo(other.x, other.y);
            const alpha = (1 - distance / 140) * 0.55;
            aboutCtx.strokeStyle = `rgba(${node.hue}, ${alpha})`;
            aboutCtx.lineWidth = 1.2;
            aboutCtx.stroke();
          }
        }
      }

      requestAnimationFrame(renderAboutNeuralConstellation);
    }
    renderAboutNeuralConstellation();

    /* ==========================================================================
       DYNAMIC GLASS FOLDERS & PROJECT FLIGHT DECK RENDERER
       ========================================================================== */
    const projectDeckContainer = document.getElementById("project-flight-deck");

    function renderGlassFolders() {
      const grid = document.getElementById("glass-folder-cards-grid");
      if (!grid) return;

      grid.innerHTML = USER_PROJECTS.map((proj, idx) => {
        const isSelected = idx === currentProjectIdx;
        const artClass = `art-${proj.art || 'aurora'}`;
        
        return `
          <div class="glass-folder-card interactive-target ${isSelected ? 'is-selected' : ''}" data-idx="${idx}" data-badge="FOLDER: ${proj.title}">
            <div class="glass-folder-wrapper">
              <!-- Back Folder Plate -->
              <div class="glass-folder-back">
                
                <!-- Folder Tab Bar -->
                <div class="glass-folder-tab-bar">
                  <div class="glass-folder-tab-pill bg-${proj.statusColor}-500/15 border border-${proj.statusColor}-500/30 text-${proj.statusColor}-300">
                    <i data-lucide="folder" class="w-3.5 h-3.5 text-${proj.statusColor}-400"></i>
                    <span>${proj.title}</span>
                  </div>
                  <span class="text-[10px] font-mono text-slate-400">${proj.folderMeta || 'Production'}</span>
                </div>

                <!-- Long-Exposure Art Print Plate -->
                <div class="glass-folder-art ${artClass}"></div>

                <!-- Nested Internal Files Drawer (Closed by default, fans out on hover) -->
                <div class="glass-folder-files">
                  ${proj.files.map((file, fIdx) => `
                    <div class="glass-folder-file-item text-slate-200">
                      <div class="flex items-center gap-1.5 min-w-0">
                        <i data-lucide="${fIdx === 0 ? 'file-code' : (fIdx === 1 ? 'layers' : (fIdx === 2 ? 'zap' : 'shield-check'))}" class="w-3.5 h-3.5 text-${proj.statusColor}-400 shrink-0"></i>
                        <span class="font-bold text-slate-100 truncate text-[10px]">${file.name}</span>
                      </div>
                      <span class="text-slate-400 text-[9px] shrink-0 font-mono">${file.meta}</span>
                    </div>
                  `).join('')}
                </div>

                <!-- Frosted Glass Front Cover (Closed by default, leans down on hover) -->
                <div class="glass-folder-front">
                  <div class="flex items-center justify-between text-xs font-mono mb-2">
                    <span class="text-${proj.statusColor}-400 font-bold tracking-wider text-[10px]">${proj.category}</span>
                    <span class="px-2 py-0.5 rounded-full bg-${proj.statusColor}-500/15 border border-${proj.statusColor}-500/30 text-${proj.statusColor}-300 text-[9.5px]">${proj.status}</span>
                  </div>

                  <h3 class="text-lg font-bold text-white font-sans tracking-tight mb-2">
                    ${proj.title}
                  </h3>

                  <p class="text-slate-300 text-xs leading-relaxed font-sans mb-3 line-clamp-3">
                    ${proj.summary}
                  </p>

                  <!-- Tech stack badges -->
                  <div class="flex flex-wrap gap-1 mb-3.5 font-mono text-[9.5px]">
                    ${proj.techStack.slice(0, 4).map(t => `
                      <span class="px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10">${t}</span>
                    `).join('')}
                    ${proj.techStack.length > 4 ? `<span class="px-1.5 py-0.5 rounded bg-white/5 text-slate-400">+${proj.techStack.length - 4}</span>` : ''}
                  </div>

                  <!-- Direct Links: Live Demo & GitHub Repo & Toggle -->
                  <div class="flex items-center gap-2 pt-2.5 border-t border-white/10">
                    <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="glass-folder-action-btn flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold" onclick="event.stopPropagation()" data-badge="LIVE DEMO">
                      <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                      <span>Live Demo</span>
                    </a>
                    
                    <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="glass-folder-action-btn bg-white/10 hover:bg-white/20 text-white border border-white/15" onclick="event.stopPropagation()" data-badge="GITHUB REPO" title="Open GitHub Repository">
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      <span>GitHub</span>
                    </a>

                    <button class="glass-folder-toggle-btn p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10" data-badge="EXPAND FILES" title="Toggle internal files">
                      <i data-lucide="folder-closed" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        `;
      }).join('');

      bindFolderCardInteractions();
      if (window.lucide) lucide.createIcons();
      attachCursorHandlers();
    }

    function bindFolderCardInteractions() {
      const cards = document.querySelectorAll(".glass-folder-card");

      cards.forEach((card) => {
        const wrapper = card.querySelector(".glass-folder-wrapper");
        const idx = parseInt(card.getAttribute("data-idx"), 10);

        // 3D Perspective Hover Lean
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 7;
          const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;

          wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }, { passive: true });

        card.addEventListener("mouseleave", () => {
          wrapper.style.transform = "";
        }, { passive: true });

        // Toggle button support for mobile/touch
        const toggleBtn = card.querySelector(".glass-folder-toggle-btn");
        if (toggleBtn) {
          toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const wasOpen = card.classList.contains("is-open");
            cards.forEach(c => c.classList.remove("is-open"));
            if (!wasOpen) card.classList.add("is-open");
            renderProjectDeck(idx);
          });
        }

        // Click Card to load into deep-dive Flight Deck
        card.addEventListener("click", () => {
          renderProjectDeck(idx, true);
        });
      });
    }

    function renderProjectDeck(idx, withLoader = false) {
      currentProjectIdx = idx;
      const proj = USER_PROJECTS[idx];

      // Update folder selection state (cleanly highlighted, no permanent clutter)
      document.querySelectorAll(".glass-folder-card").forEach((card, i) => {
        if (i === idx) {
          card.classList.add("is-selected");
        } else {
          card.classList.remove("is-selected");
          card.classList.remove("is-open");
        }
      });

      if (withLoader && projectDeckContainer) {
        showComponentLoader(projectDeckContainer, "Loading System Specs...", 260);
      }

      projectDeckContainer.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-7 space-y-6">
            <div class="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/10">
              <span class="text-emerald-400 font-semibold tracking-wider">${proj.category}</span>
              <span class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-${proj.statusColor}-500/15 text-${proj.statusColor}-400 border border-${proj.statusColor}-500/30">
                <span class="w-1.5 h-1.5 rounded-full bg-${proj.statusColor}-400"></span>
                <span>${proj.status}</span>
              </span>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-100 font-sans tracking-tight">
                ${proj.title}
              </h3>
              
              <div class="inline-flex p-1 rounded-lg bg-black/50 border border-white/15 font-mono text-[11px] self-start sm:self-auto">
                <button id="deck-impact-btn" class="interactive-target px-2.5 py-1 rounded transition-all ${activeProjectView === 'impact' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}" data-badge="IMPACT">
                  Impact
                </button>
                <button id="deck-spec-btn" class="interactive-target px-2.5 py-1 rounded transition-all ${activeProjectView === 'spec' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}" data-badge="DEEP SPEC">
                  Deep Spec
                </button>
              </div>
            </div>

            <div class="min-h-[130px]">
              ${activeProjectView === 'impact' ? `
                <p class="text-slate-200 text-base leading-relaxed mb-6 font-sans">
                  ${proj.summary}
                </p>
                <div class="grid grid-cols-3 gap-3 font-mono">
                  ${proj.metrics.map(m => `
                    <div class="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <div class="text-[10px] text-slate-400 uppercase">${m.label}</div>
                      <div class="text-lg font-bold text-emerald-400 mt-1">${m.value}</div>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <div class="p-4 rounded-xl bg-black/70 border border-white/15 font-mono text-xs text-slate-200 overflow-x-auto whitespace-pre leading-snug">
${proj.specCode}
                </div>
              `}
            </div>

            <div class="pt-2">
              <div class="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">Tech Stack:</div>
              <div class="flex flex-wrap gap-1.5 font-mono text-xs">
                ${proj.techStack.map(t => `
                  <span class="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-slate-200">${t}</span>
                `).join('')}
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-3 font-mono text-xs">
              <button onclick="navigator.clipboard.writeText('${proj.liveUrl}'); showToast('Copied Live URL: ${proj.liveUrl}');" class="interactive-target inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-all" data-badge="COPY LIVE">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy Live URL</span>
              </button>

              <button onclick="navigator.clipboard.writeText('${proj.githubUrl}'); showToast('Copied GitHub URL: ${proj.githubUrl}');" class="interactive-target inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all" data-badge="COPY REPO">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy Repo URL</span>
              </button>
            </div>
          </div>

          <!-- Two Action Cards: Live Demo & GitHub Repo -->
          <div class="lg:col-span-5 flex flex-col gap-4">
            
            <!-- Card 1: Live Demo Link Card -->
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="group interactive-target relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-black/60 to-black/80 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 flex flex-col justify-between overflow-hidden" data-badge="LIVE DEMO">
              <div class="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div class="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs">
                  <span class="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>LIVE DEPLOYMENT</span>
                  </span>
                  <span class="text-slate-400 group-hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono text-[11px]">
                    <span>Visit</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                  </span>
                </div>

                <h4 class="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors font-sans mb-1.5 flex items-center gap-2">
                  <span>Launch Live Demo</span>
                </h4>

                <div class="text-xs font-mono text-emerald-400/90 truncate mb-3">
                  ${proj.liveUrl.replace('https://', '').replace(/\/$/, '')}
                </div>

                <p class="text-slate-300 text-xs leading-relaxed font-sans">
                  Experience the fully active production deployment with real-time UI workflows, responsive layout, and connected endpoints.
                </p>
              </div>

              <div class="pt-4 mt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                <span class="text-[11px] text-slate-400">Environment: Production</span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold group-hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20">
                  <span>Open App</span>
                  <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                </span>
              </div>
            </a>

            <!-- Card 2: GitHub Repository Link Card -->
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="group interactive-target relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] via-black/60 to-black/80 border border-white/15 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/15 flex flex-col justify-between overflow-hidden" data-badge="GITHUB REPO">
              <div class="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/15 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div class="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs">
                  <span class="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-slate-200 text-[11px] font-semibold">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    <span>GITHUB REPOSITORY</span>
                  </span>
                  <span class="text-slate-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1 font-mono text-[11px]">
                    <span>Source</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                  </span>
                </div>

                <h4 class="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-sans mb-1.5 flex items-center gap-2">
                  <span>Explore GitHub Source</span>
                </h4>

                <div class="text-xs font-mono text-cyan-400/90 truncate mb-3">
                  ${proj.githubUrl.replace('https://github.com/', '').replace(/\.git$/, '')}
                </div>

                <p class="text-slate-300 text-xs leading-relaxed font-sans">
                  Inspect the source code architecture, modular services, dependencies, database models, and repository documentation.
                </p>
              </div>

              <div class="pt-4 mt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                <span class="text-[11px] text-slate-400">License: Open Source</span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 font-semibold group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <span>View Code</span>
                  <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                </span>
              </div>
            </a>

          </div>

        </div>
      `;

      attachCursorHandlers();
      bindDeckButtons();
      if (window.lucide) lucide.createIcons();
    }

    function renderSimulator(type) {
      if (type === "rag") {
        return `
          <div class="space-y-4 font-mono text-xs">
            <div class="text-slate-300 text-[11px]">Run query against multi-tenant isolated vector store (Chroma/Pinecone):</div>
            <div class="flex gap-2">
              <input id="rag-sim-input" type="text" value="Explain tenant isolation policies" class="interactive-target flex-1 bg-black/70 border border-white/20 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-400" data-badge="QUERY" />
              <button id="rag-sim-btn" class="interactive-target px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all" data-badge="RUN">RUN</button>
            </div>
            <div id="rag-sim-output" class="p-3 rounded-lg bg-black/80 border border-white/15 text-slate-300 min-h-[140px] text-[11px] leading-relaxed">
              <span class="text-slate-400">// Standby. Press RUN to execute Chroma similarity retrieval.</span>
            </div>
          </div>
        `;
      } else if (type === "emotion") {
        return `
          <div class="space-y-4 font-mono text-xs">
            <div class="text-slate-300 text-[11px]">Classify emotion using Custom Bi-GRU TensorFlow Lite model:</div>
            <div class="flex gap-2">
              <input id="emotion-sim-input" type="text" value="I just secured rank 2 in engineering!" class="interactive-target flex-1 bg-black/70 border border-white/20 rounded-lg px-3 py-1.5 text-slate-100 focus:outline-none focus:border-emerald-400" data-badge="INPUT" />
              <button id="emotion-sim-btn" class="interactive-target px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all" data-badge="SCAN">SCAN</button>
            </div>
            <div id="emotion-sim-output" class="p-3 rounded-lg bg-black/80 border border-white/15 text-slate-300 min-h-[140px] text-[11px]">
              <span class="text-slate-400">// Ready. Input any text sentence and press SCAN.</span>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="space-y-3 font-mono text-xs">
            <div class="text-slate-300 text-[11px]">Interactive California Housing Random Forest Pipeline:</div>
            
            <div class="space-y-2 bg-black/50 p-2.5 rounded-lg border border-white/10">
              <div class="flex justify-between items-center text-[10.5px]">
                <span class="text-slate-400">Median Income (MedInc):</span>
                <span id="slider-val-medinc" class="text-emerald-400 font-bold">$8.32 x 10k</span>
              </div>
              <input type="range" id="slider-medinc" min="1.0" max="15.0" step="0.2" value="8.32" class="w-full interactive-target" data-badge="ADJUST">

              <div class="flex justify-between items-center text-[10.5px] pt-1">
                <span class="text-slate-400">House Age (Years):</span>
                <span id="slider-val-age" class="text-emerald-400 font-bold">28 yrs</span>
              </div>
              <input type="range" id="slider-age" min="1" max="52" step="1" value="28" class="w-full interactive-target" data-badge="ADJUST">

              <div class="flex justify-between items-center text-[10.5px] pt-1">
                <span class="text-slate-400">Average Rooms:</span>
                <span id="slider-val-rooms" class="text-emerald-400 font-bold">6.4 rooms</span>
              </div>
              <input type="range" id="slider-rooms" min="2" max="12" step="0.5" value="6.4" class="w-full interactive-target" data-badge="ADJUST">
            </div>

            <div id="housing-sim-output" class="p-3 rounded-lg bg-black/80 border border-emerald-500/40 text-slate-300 text-[11px]">
              <div class="text-slate-400 text-[10px] uppercase">Ensemble Predicted Median Price</div>
              <div id="live-house-price" class="text-emerald-400 font-bold text-lg mt-0.5">$462,800.00</div>
              <div class="text-slate-500 text-[10px] mt-0.5">Model: 100 Trees Ensemble &bull; FastAPI REST Verified</div>
            </div>
          </div>
        `;
      }
    }

    function bindDeckButtons() {
      const impactBtn = document.getElementById("deck-impact-btn");
      const specBtn = document.getElementById("deck-spec-btn");
      if (impactBtn && specBtn) {
        impactBtn.addEventListener("click", () => {
          activeProjectView = "impact";
          renderProjectDeck(currentProjectIdx);
        });
        specBtn.addEventListener("click", () => {
          activeProjectView = "spec";
          renderProjectDeck(currentProjectIdx);
        });
      }
    }

    function bindSimulatorLogic(type) {
      if (type === "rag") {
        const btn = document.getElementById("rag-sim-btn");
        const out = document.getElementById("rag-sim-output");
        if (btn) {
          btn.addEventListener("click", () => {
            out.innerHTML = `<span class="text-emerald-400">► Querying Chroma Vector DB (Namespace: user_env_isolated)...</span><br/>`;
            setTimeout(() => {
              out.innerHTML += `<span class="text-slate-400">► Top-k chunks retrieved. Cosine similarity: 0.941.</span><br/>`;
            }, 180);
            setTimeout(() => {
              out.innerHTML += `<span class="text-emerald-300 font-semibold">► LangChain Response:</span> "Tenant boundaries are enforced via separate vector namespace keys, preventing cross-tenant context leakage."`;
              showToast("RAG Query Complete: Tenant context isolated");
            }, 400);
          });
        }
      } else if (type === "emotion") {
        const btn = document.getElementById("emotion-sim-btn");
        const out = document.getElementById("emotion-sim-output");
        if (btn) {
          btn.addEventListener("click", () => {
            const text = document.getElementById("emotion-sim-input").value.toLowerCase();
            out.innerHTML = `<span class="text-slate-400">Tokenizing sentence & feeding Bi-GRU neural layers...</span><br/>`;
            setTimeout(() => {
              let joy = 12, sadness = 8, anger = 5, fear = 4, love = 15, surprise = 5;
              if (text.includes("rank") || text.includes("happy") || text.includes("love") || text.includes("win")) {
                joy = 92; love = 84;
              } else if (text.includes("sad") || text.includes("bad") || text.includes("fail")) {
                sadness = 88; anger = 42;
              } else {
                joy = 68; surprise = 45;
              }

              out.innerHTML = `
                <div class="space-y-1.5 pt-1">
                  <div class="flex justify-between text-emerald-400 font-bold text-[11px]">
                    <span>PRIMARY: ${joy > sadness ? 'JOY / OPTIMISM' : 'SADNESS / CONCERN'}</span>
                    <span>${Math.max(joy, sadness)}%</span>
                  </div>
                  <div class="w-full bg-slate-800 rounded-full h-1.5"><div class="bg-emerald-400 h-1.5 rounded-full" style="width: ${Math.max(joy, sadness)}%"></div></div>
                  
                  <div class="grid grid-cols-3 gap-2 text-[10px] text-slate-300 pt-1">
                    <div>Love: <span class="text-emerald-300">${love}%</span></div>
                    <div>Surprise: <span class="text-emerald-300">${surprise}%</span></div>
                    <div>Anger: <span class="text-emerald-300">${anger}%</span></div>
                  </div>
                </div>
              `;
              showToast("Emotion Scanner: Bi-GRU inference complete");
            }, 280);
          });
        }
      } else if (type === "housing") {
        const sMedInc = document.getElementById("slider-medinc");
        const sAge = document.getElementById("slider-age");
        const sRooms = document.getElementById("slider-rooms");

        const lblMedInc = document.getElementById("slider-val-medinc");
        const lblAge = document.getElementById("slider-val-age");
        const lblRooms = document.getElementById("slider-val-rooms");
        const livePrice = document.getElementById("live-house-price");

        function updateLiveRegression() {
          const med = parseFloat(sMedInc.value);
          const age = parseFloat(sAge.value);
          const rooms = parseFloat(sRooms.value);

          lblMedInc.innerText = `$${med.toFixed(2)} x 10k`;
          lblAge.innerText = `${age} yrs`;
          lblRooms.innerText = `${rooms.toFixed(1)} rooms`;

          const basePrice = 65000;
          const calculated = basePrice + (med * 42000) + (age * 1200) + (rooms * 8500);

          livePrice.innerText = `$${calculated.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }

        if (sMedInc && sAge && sRooms) {
          sMedInc.addEventListener("input", updateLiveRegression);
          sAge.addEventListener("input", updateLiveRegression);
          sRooms.addEventListener("input", updateLiveRegression);
        }
      }
    }

    document.getElementById("proj-prev-btn")?.addEventListener("click", () => {
      const newIdx = (currentProjectIdx - 1 + USER_PROJECTS.length) % USER_PROJECTS.length;
      renderProjectDeck(newIdx);
    });

    document.getElementById("proj-next-btn")?.addEventListener("click", () => {
      const newIdx = (currentProjectIdx + 1) % USER_PROJECTS.length;
      renderProjectDeck(newIdx);
    });

    renderGlassFolders();
    renderProjectDeck(0);

    /* ==========================================================================
       HERO SEARCH BAR AUTOCOMPLETE & ROUTING (CALM NON-RADAR)
       ========================================================================== */
    const heroInput = document.getElementById("hero-search-input");
    const heroExec = document.getElementById("hero-search-exec");
    const heroInstant = document.getElementById("search-instant-results");

    function executeHeroSearch() {
      const q = heroInput.value.trim().toLowerCase();
      if (!q) return;

      if (q.includes("rag") || q.includes("tenant") || q.includes("multi")) {
        renderProjectDeck(0);
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("emotion") || q.includes("gru") || q.includes("nlp")) {
        renderProjectDeck(1);
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("house") || q.includes("price") || q.includes("california")) {
        renderProjectDeck(2);
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("sih") || q.includes("hackathon") || q.includes("rank") || q.includes("excellence")) {
        document.getElementById("achievements").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("education") || q.includes("pillai") || q.includes("college") || q.includes("icles") || q.includes("dpvn") || q.includes("10th") || q.includes("boards")) {
        document.getElementById("education").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("cert") || q.includes("agentic") || q.includes("java")) {
        document.getElementById("certifications").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("stack") || q.includes("python") || q.includes("fastapi") || q.includes("sphere")) {
        document.getElementById("stack").scrollIntoView({ behavior: "smooth" });
      } else if (q.includes("loader") || q.includes("welcome")) {
        showWelcomeLoader();
        showToast("Replaying Welcome Loader...");
      } else if (q.includes("@") || q.includes("contact") || q.includes("hire")) {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      } else {
        showToast(`Searching for: ${q}`);
      }
      heroInstant.classList.add("hidden");
    }

    heroExec.addEventListener("click", executeHeroSearch);
    heroInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") executeHeroSearch();
    });

    document.querySelectorAll(".quick-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        heroInput.value = pill.innerText;
        executeHeroSearch();
      });
    });

    /* ==========================================================================
       CONTACT FORM SUBMISSION & DIRECT DISPATCH
       ========================================================================== */
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const msgInput = document.getElementById("contact-message");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const message = msgInput ? msgInput.value.trim() : "";

        if (!name || !email || !message) {
          showToast("Please complete all fields before sending.");
          return;
        }

        showToast("Opening email client to dispatch message...");
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\nSender: ${name}\nEmail: ${email}`);
        window.location.href = `mailto:28rushikeshjagtap@gmail.com?subject=${subject}&body=${body}`;
        contactForm.reset();
      });
    }

    /* ==========================================================================
       WELCOME PRELOADER CONTROLLER (UIVERSE BY DEXTER-ST)
       ========================================================================== */
    const preloader = document.getElementById("portfolio-preloader");
    
    function dismissPreloader() {
      if (!preloader || preloader.dataset.dismissed === "true") return;
      preloader.dataset.dismissed = "true";
      preloader.style.opacity = "0";
      preloader.style.transform = "scale(1.02)";
      preloader.style.pointerEvents = "none";
      setTimeout(() => {
        preloader.style.display = "none";
        if (typeof syncActiveSectionFromScroll === "function") syncActiveSectionFromScroll();
      }, 750);
      if (typeof syncActiveSectionFromScroll === "function") syncActiveSectionFromScroll();
    }

    function showWelcomeLoader() {
      if (!preloader) return;
      preloader.style.display = "flex";
      preloader.dataset.dismissed = "false";
      preloader.style.pointerEvents = "auto";
      requestAnimationFrame(() => {
        preloader.style.opacity = "1";
        preloader.style.transform = "scale(1)";
      });
      setTimeout(dismissPreloader, 3200);
    }

    window.showWelcomeLoader = showWelcomeLoader;

    if (preloader) {
      // Auto-dismiss after welcome sequence illuminates fully
      const welcomeTimer = setTimeout(dismissPreloader, 2800);

      // Instant dismiss on click or keyboard
      preloader.addEventListener("click", () => {
        clearTimeout(welcomeTimer);
        dismissPreloader();
      });

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
          clearTimeout(welcomeTimer);
          dismissPreloader();
        }
      }, { once: true });
    }
