"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React, { ReactNode } from "react";

type ProvidersProps = {
   children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
   return (
      <Provider store={store}>
         <PersistGate
            loading={null}
            persistor={persistor}
         >
            {children}
         </PersistGate>
      </Provider>
   );
};

export default Providers;
