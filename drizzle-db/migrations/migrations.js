// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_groovy_king_bedlam.sql';
import m0001 from './0001_ambitious_songbird.sql';
import m0002 from './0002_dry_steel_serpent.sql';
import m0003 from './0003_strange_slyde.sql';
import m0004 from './0004_high_triathlon.sql';
import m0005 from './0005_cuddly_ezekiel.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002,
m0003,
m0004,
m0005
    }
  }
  