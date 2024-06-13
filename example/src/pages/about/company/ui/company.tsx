/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { SecondLayout } from '$widgets/layouts/second';
import { Button } from '$shared/ui/button';
import { SberCard } from '$features/cards/payments/sber/ui/sber-card';
import { List } from '$features/modal';

export const Company = () => (
    <SecondLayout>
        <List />
        <Button />
        <SberCard />
    </SecondLayout>
);
