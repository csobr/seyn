import * as React from 'react';

type UserContextProps = {
  name: string;
};

export const CurrentUser = React.createContext<Partial<UserContextProps>>({});
