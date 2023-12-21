const explodedModelPositions = {
  ziegel: {
    name: `Roof Tiles`,
    description: `Interlocking tiles, French profile`,
    position: {
      x: 0,
      y: Math.random() * 0.05 + 0.35,
      z: 0,
    },
    alpha: 0.1,
    titlePosition: [-0.25, 3.5, 0.8],
  },
  konterlattung: {
    name: `Tile Battens`,
    description: `Treated Sawn Batten, 
    protected against decay and fungal attack,
    50 x 25mm`,
    position: {
      x: 0,
      y: 0.25,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.1, 3.4, 0.8],
  },
  dachlattung: {
    name: `Battens`,
    description: `Treated Sawn Batten,
    protected against decay and fungal attack,
    50 x 25mm`,
    position: {
      x: 0,
      y: 0.15,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.2, 3.5, 0.8],
  },
  unterdeckbahn: {
    name: `Underlay membrane`,
    description: `Diffusion open underlay`,
    position: {
      x: 0.5,
      y: 0.4,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.3, 3.45, 0.8],
  },
  schallung: {
    name: `Roof Sheating`,
    description: ``,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.7, 2.7, 0.8],
  },
  sparren: {
    name: `Rafter`,
    description: `Mineral wool`,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.6, 2.6, 0.8],
  },
  dämmungdach: {
    name: `Roof cavity insulation`,
    description: `Cellulose insulation`,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.3, 3.2, 0.8],
  },
  dämmungwand: {
    name: `Cavity insulation`,
    description: `Cellulose insulation`,
    position: {
      x: 0.25,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.2, 2.5, 0.8],
  },
  luftdichtkeitsband: {
    name: `Tape`,
    description: `for airtight`,
    position: {
      x: 0.3,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.75, 3.1, 0.8],
  },
  beplankunginnen: {
    name: `OSB Board`,
    description: `Structural board with load bearing properties
    2440mm x 1220mm 11mm`,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.3, 3.0, 0.8],
  },
  osbwand: {
    name: `OSB Board`,
    description: `Structural board with load bearing properties
    2440mm x 1220mm 11mm`,
    position: {
      x: 0.3,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.3, 2.7, 0.8],
  },
  rahmendecke: {
    name: `Ceiling Battens`,
    description: `Support for plasterboard paneling`,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.35, 3.2, 0.8],
  },

  rahmenwandinnen: {
    name: `Wall Battens`,
    description: `Support plasterboard paneling`,
    position: {
      x: 0.35,
      y: 0.0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.35, 2.75, 0.8],
  },
  weichfaserdämmung: {
    name: `Insulation layer`,
    description: `Services Void, insulated`,
    position: {
      x: 0.45,
      y: 0.0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.55, 2.8, 0.8],
  },
  gipsverkleidung: {
    name: `Drywall panel`,
    description: ``,
    position: {
      x: 0.55,
      y: 0.1,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [0.6, 3.0, 0.8],
  },
  stegträger: {
    name: `Timber stud`,
    description: ``,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.1, 2.3, 0.8],
  },
  wandrähm: {
    name: `Timber top plate`,
    description: ``,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.1, 2.7, 0.8],
  },
  stellbrett: {
    name: `Mounting Board`,
    description: ``,
    position: {
      x: -0.1,
      y: -0.3,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.3, 2.8, 0.8],
  },
  mdfplatte: {
    name: `MDF Board`,
    description: `Coated, moisture resistant MDF`,
    position: {
      x: -0.1,
      y: -0.6,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.3, 2, 0.8],
  },
  traglatte: {
    name: `Battens`,
    description: `50 x 25mm`,
    position: {
      x: -0.2,
      y: -0.6,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.45, 2, 0.8],
  },
  verkleidungfassade: {
    name: `Cladding`,
    description: ``,
    position: {
      x: -0.4,
      y: -0.7,
      z: 0,
    },
    alpha: 0.01,
    titlePosition: [-0.7, 2.2, 0.8],
  },
};

export default explodedModelPositions;
