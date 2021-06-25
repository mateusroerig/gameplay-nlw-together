import React from 'react';
import { Image } from 'react-native'

import { styles } from './styles';

type Props = {
  uri?: string;
};

export function GuildIcon({ uri = 'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj' } : Props) {
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
};
