// Generated by https://quicktype.io

export interface GIF {
    data:       Gifs[];
    pagination: Pagination;
    meta:       Meta;
}

export interface Gifs {
    type:                       string;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   string;
    source:                     string;
    title:                      string;
    rating:                     string;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    is_sticker:                 number;
    import_datetime:            string;
    trending_datetime:          string;
    images:                     Images;
    analytics_response_payload: string;
    analytics:                  Analytics;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:                 { [key: string]: string };
    downsized:                The480_WStill;
    downsized_large:          The480_WStill;
    downsized_medium:         The480_WStill;
    downsized_small:          DownsizedSmall;
    downsized_still:          The480_WStill;
    fixed_height:             { [key: string]: string };
    fixed_height_downsampled: { [key: string]: string };
    fixed_height_small:       { [key: string]: string };
    fixed_height_small_still: The480_WStill;
    fixed_height_still:       The480_WStill;
    fixed_width:              { [key: string]: string };
    fixed_width_downsampled:  { [key: string]: string };
    fixed_width_small:        { [key: string]: string };
    fixed_width_small_still:  The480_WStill;
    fixed_width_still:        The480_WStill;
    looping:                  { [key: string]: string };
    original_still:           The480_WStill;
    original_mp4:             DownsizedSmall;
    preview:                  DownsizedSmall;
    preview_gif:              The480_WStill;
    preview_webp:             The480_WStill;
    "480w_still":             The480_WStill;
}

export interface The480_WStill {
    height: string;
    width:  string;
    size:   string;
    url:    string;
}

export interface DownsizedSmall {
    height:   string;
    width:    string;
    mp4_size: string;
    mp4:      string;
}

export interface Meta {
    status:      number;
    msg:         string;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count:       number;
    offset:      number;
}
