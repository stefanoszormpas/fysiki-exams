/* Βοηθοί για σχήματα SVG (γραφήματα, κεκλιμένο επίπεδο, κρούσεις). Οι ετικέτες είναι δίγλωσσες. */
window.FIG = (function () {
  const C = { ink: '#1d2433', axis: '#475467', grid: '#e4e7ec', a: '#0f6e6b', b: '#a9631a', n: '#1c3a5e', blk: '#dbe7f3' };
  const T = (x, l) => typeof x === 'string' ? x : l === 'fr' ? x.fr : l === 'el' ? x.el : x.fr + ' / ' + x.el;
  const num = v => String(+v.toFixed(2)).replace('.', ',');
  const open = (W, H, label) => `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="${label || ''}" style="max-width:100%;height:auto;font-family:Inter,system-ui,sans-serif;font-size:13px">`;
  const arrow = (x1, y1, x2, y2, col, w = 2.5) => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    const p = [[x2, y2], [x2 - h * Math.cos(a - 0.4), y2 - h * Math.sin(a - 0.4)], [x2 - h * Math.cos(a + 0.4), y2 - h * Math.sin(a + 0.4)]];
    return `<line x1="${x1}" y1="${y1}" x2="${x2 - 5 * Math.cos(a)}" y2="${y2 - 5 * Math.sin(a)}" stroke="${col}" stroke-width="${w}"/><polygon points="${p.map(q => q.join(',')).join(' ')}" fill="${col}"/>`;
  };

  /* Γράφημα: o = {xmax,ymax,ymin,xstep,ystep,xlabel,ylabel,lines:[{pts,color}],dots:[[x,y]]} */
  function graph(o, lang) {
    const W = o.w || 460, H = o.h || 290, L = 60, R = 24, Tp = 18, Bt = 54;
    const pw = W - L - R, ph = H - Tp - Bt, ymin = o.ymin || 0;
    const X = x => L + pw * x / o.xmax, Y = y => Tp + ph * (1 - (y - ymin) / (o.ymax - ymin));
    let s = open(W, H, T(o.ylabel, lang) + ' / ' + T(o.xlabel, lang));
    s += `<rect width="${W}" height="${H}" fill="#fff"/>`;
    const nx = Math.round(o.xmax / o.xstep), ny = Math.round((o.ymax - ymin) / o.ystep);
    for (let i = 0; i <= nx; i++) { const x = o.xstep * i;
      s += `<line x1="${X(x)}" y1="${Y(ymin)}" x2="${X(x)}" y2="${Y(o.ymax)}" stroke="${C.grid}"/><text x="${X(x)}" y="${Y(ymin) + 18}" text-anchor="middle" fill="${C.axis}">${num(x)}</text>`; }
    for (let j = 0; j <= ny; j++) { const y = ymin + o.ystep * j;
      s += `<line x1="${X(0)}" y1="${Y(y)}" x2="${X(o.xmax)}" y2="${Y(y)}" stroke="${C.grid}"/><text x="${X(0) - 8}" y="${Y(y) + 4}" text-anchor="end" fill="${C.axis}">${num(y)}</text>`; }
    s += `<line x1="${X(0)}" y1="${Y(ymin)}" x2="${X(o.xmax) + 8}" y2="${Y(ymin)}" stroke="${C.ink}" stroke-width="1.6"/>`;
    s += `<line x1="${X(0)}" y1="${Y(ymin)}" x2="${X(0)}" y2="${Y(o.ymax) - 8}" stroke="${C.ink}" stroke-width="1.6"/>`;
    s += `<polygon points="${X(o.xmax) + 12},${Y(ymin)} ${X(o.xmax) + 4},${Y(ymin) - 4} ${X(o.xmax) + 4},${Y(ymin) + 4}" fill="${C.ink}"/>`;
    s += `<polygon points="${X(0)},${Y(o.ymax) - 12} ${X(0) - 4},${Y(o.ymax) - 4} ${X(0) + 4},${Y(o.ymax) - 4}" fill="${C.ink}"/>`;
    (o.lines || []).forEach(l => { s += `<polyline fill="none" stroke="${l.color || C.a}" stroke-width="3.2" stroke-linejoin="round" points="${l.pts.map(p => X(p[0]) + ',' + Y(p[1])).join(' ')}"/>`; });
    (o.dots || []).forEach(d => { s += `<circle cx="${X(d[0])}" cy="${Y(d[1])}" r="4" fill="${C.b}"/>`; });
    s += `<text x="${L + pw / 2}" y="${H - 8}" text-anchor="middle" fill="${C.ink}" font-weight="600">${T(o.xlabel, lang)}</text>`;
    s += `<text transform="translate(16 ${Tp + ph / 2}) rotate(-90)" text-anchor="middle" fill="${C.ink}" font-weight="600">${T(o.ylabel, lang)}</text></svg>`;
    return s;
  }

  /* Κεκλιμένο επίπεδο με κιβώτιο και σχοινί: o = {angle,mass,rope} */
  function incline(o, lang) {
    const W = 440, H = 270, ang = o.angle || 30, r = ang * Math.PI / 180;
    const A = [30, 235], B = [400, 235], Cc = [400, 235 - 370 * Math.tan(r)];
    const s0 = 150; const P = [A[0] + s0 * Math.cos(r), A[1] - s0 * Math.sin(r)];
    let s = open(W, H, 'incline ' + ang);
    s += `<rect width="${W}" height="${H}" fill="#fff"/>`;
    s += `<polygon points="${A} ${B} ${Cc}" fill="#eef2f7" stroke="${C.ink}" stroke-width="2"/>`;
    for (let x = 30; x < 400; x += 14) s += `<line x1="${x}" y1="235" x2="${x - 8}" y2="245" stroke="${C.axis}"/>`;
    s += `<g transform="translate(${P[0]} ${P[1]}) rotate(${-ang})">`;
    s += `<rect x="-30" y="-52" width="60" height="52" fill="${C.blk}" stroke="${C.n}" stroke-width="2"/>`;
    s += `<text x="0" y="-21" text-anchor="middle" fill="${C.n}" font-weight="700">${o.mass}</text>`;
    if (o.rope) {
      s += `<line x1="30" y1="-26" x2="175" y2="-26" stroke="${C.b}" stroke-width="3"/>`;
      s += `<line x1="175" y1="-48" x2="175" y2="0" stroke="${C.ink}" stroke-width="4"/>`;
      for (let y = -46; y < 0; y += 9) s += `<line x1="175" y1="${y}" x2="183" y2="${y + 7}" stroke="${C.axis}"/>`;
      s += `<text x="100" y="-33" text-anchor="middle" fill="${C.b}" font-weight="600">${T(o.rope, lang)}</text>`;
    }
    s += `</g>`;
    s += `<path d="M ${A[0] + 60} ${A[1]} A 60 60 0 0 0 ${A[0] + 60 * Math.cos(r)} ${A[1] - 60 * Math.sin(r)}" fill="none" stroke="${C.ink}"/>`;
    s += `<text x="${A[0] + 72}" y="${A[1] - 8}" fill="${C.ink}" font-weight="600">${ang}°</text>`;
    s += `<text x="${(B[0] + 30) / 2 + 40}" y="${H - 6}" fill="${C.axis}" text-anchor="middle">${T({ fr: 'sans frottement', el: 'χωρίς τριβή' }, lang)}</text></svg>`;
    return s;
  }

  /* Κρούση πριν/μετά: o = {before:[{x,w,m,v,dir}], after:[...]} */
  function collision(o, lang) {
    const W = 520, H = 280;
    let s = open(W, H, 'collision');
    s += `<rect width="${W}" height="${H}" fill="#fff"/>`;
    const row = (blocks, base, title) => {
      let r = `<text x="14" y="${base - 90}" fill="${C.n}" font-weight="700">${T(title, lang)}</text>`;
      r += `<line x1="14" y1="${base}" x2="${W - 14}" y2="${base}" stroke="${C.ink}" stroke-width="2"/>`;
      blocks.forEach(b => {
        r += `<rect x="${b.x - b.w / 2}" y="${base - 42}" width="${b.w}" height="42" fill="${C.blk}" stroke="${C.n}" stroke-width="2"/>`;
        r += `<text x="${b.x}" y="${base - 16}" text-anchor="middle" fill="${C.n}" font-weight="700">${b.m}</text>`;
        if (b.dir) {
          const x1 = b.x, x2 = b.x + b.dir * 64;
          r += arrow(x1, base - 54, x2, base - 54, b.color || C.b);
          r += `<text x="${(x1 + x2) / 2}" y="${base - 62}" text-anchor="middle" fill="${b.color || C.b}" font-weight="600">${b.v}</text>`;
        } else if (b.v) {
          r += `<text x="${b.x}" y="${base - 52}" text-anchor="middle" fill="${C.b}" font-weight="600">${b.v}</text>`;
        }
      });
      return r;
    };
    s += row(o.before, 125, { fr: 'Avant le choc', el: 'Πριν την κρούση' });
    s += row(o.after, 245, { fr: 'Après le choc', el: 'Μετά την κρούση' });
    s += `</svg>`;
    return s;
  }
  return { graph, incline, collision };
})();
