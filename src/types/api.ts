interface Links {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string | null;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface Failures {
  time: number;
  altitude: number | null;
  reason: string;
}

interface Cores {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
}

interface Docs {
  fairings: Fairings | null;
  links: Links;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failures[];
  details: string | null;
  crew: any[]; // Puedes ajustar esto según la estructura real de los datos
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Cores[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string | null;
  id: string;
}

export type SpaceXResponse = {
  docs: Docs[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

// Uso del tipo
