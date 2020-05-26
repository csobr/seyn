import * as React from 'react';

type UserContextProps = {};

export const CurrentUser = React.createContext<Partial<UserContextProps>>({});
