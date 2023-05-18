import { FC, Fragment, useMemo } from 'react'

import { NavigateNext } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemText, Link as MuiLink, useMediaQuery } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import AccessibilityGraphContainer from '../../../components/AccessibilityGraphContainer'
import AlertCard from '../../../components/AlertCard'
import { LearnPageLayout } from '../../../components/LearnPageLayout'
import theme from '../../../theme'
import { getDCTermsTitle } from '../../../utils/seo-utils'

const Bonnie: FC = () => {
  const { t, i18n } = useTranslation('learn/case-studies/bonnie')
  const en = i18n.getFixedT('en', 'learn/case-studies/bonnie')
  const fr = i18n.getFixedT('fr', 'learn/case-studies/bonnie')

  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const learnMoreLinks = useMemo(
    () => [
      {
        href: t('learn-more.main-sources-of-retirment-income.href'),
        primary: t('learn-more.main-sources-of-retirment-income.header'),
        secondary: t('learn-more.main-sources-of-retirment-income.description'),
      },
      {
        href: t('learn-more.going-from-work-to-retirement.href'),
        primary: t('learn-more.going-from-work-to-retirement.header'),
        secondary: t('learn-more.going-from-work-to-retirement.description'),
      },
      {
        href: t('learn-more.deciding-when-to-take-your-pensions.href'),
        primary: t('learn-more.deciding-when-to-take-your-pensions.header'),
        secondary: t('learn-more.deciding-when-to-take-your-pensions.description'),
      },
      {
        href: t('learn-more.saving-for-retirement.href'),
        primary: t('learn-more.saving-for-retirement.header'),
        secondary: t('learn-more.saving-for-retirement.description'),
      },
    ],
    [t]
  )

  const Img = ({ pension, classes }: { pension: string; classes?: string }) => (
    <Image
      alt={t(`${pension}.description`)}
      src={t(`${pension}.img-url.${mobile ? 'mobile' : 'desktop'}`)}
      width={842}
      height={519}
      className={`w-full ${classes}`}
    />
  )

  return (
    <>
      <NextSeo title={t('header')} additionalMetaTags={[getDCTermsTitle(en('header'), fr('header'))]} />
      <LearnPageLayout
        header={t('header')}
        breadcrumbItems={[
          {
            link: t('breadcrumbs.home.link'),
            text: t('breadcrumbs.home.text'),
          },
          {
            link: t('breadcrumbs.learn.link'),
            text: t('breadcrumbs.learn.text'),
          },
        ]}
      >
        <NextSeo title={t('header')} />

        <h2 id="key-takeaways" className="h2 !mt-0">
          {t('key-takeaways.heading')}
        </h2>
        <List disablePadding>
          {[
            {
              primary: t('key-takeaways.li1'),
              secondary: t('key-takeaways.li2'),
            },
            {
              primary: t('key-takeaways.li3'),
              secondary: t('key-takeaways.li4'),
            },
            {
              primary: t('key-takeaways.li5'),
              secondary: t('key-takeaways.li6'),
            },
          ].map(({ primary, secondary }) => (
            <ListItem key={primary} className="border-b">
              <ListItemText
                primary={primary}
                primaryTypographyProps={{ className: 'font-medium text-xl font-display my-2' }}
                secondary={secondary}
                secondaryTypographyProps={{ className: 'text-base' }}
              />
            </ListItem>
          ))}
        </List>
        <AlertCard type="tip" className="mt-5">
          <Trans
            ns="learn/case-studies/bonnie"
            i18nKey="key-takeaways.smart-tip"
            components={{
              a1: <MuiLink href={t('key-takeaways.a1')} />,
              a2: <MuiLink href={t('key-takeaways.a2')} />,
            }}
          />
        </AlertCard>

        <h2 id="overview" className="h2">
          {t('overview.heading')}
        </h2>
        <p>{t('overview.p1')}</p>
        <p>{t('overview.p2')}</p>
        <p>{t('overview.p3')}</p>
        <AlertCard type="tip">
          <Trans
            ns="learn/case-studies/bonnie"
            i18nKey="overview.smart-tip"
            components={{
              a1: <MuiLink href={t('overview.a1')} />,
              a2: <MuiLink href={t('overview.a2')} />,
            }}
          />
        </AlertCard>

        <h2 id="stopping-earnings" className="h2">
          {t('stopping-earnings.heading')}
        </h2>
        <Img pension="stopping-earnings" />
        <p className="mt-2 rounded-lg bg-gray-surface p-4">{t('stopping-earnings.p')}</p>
        <AccessibilityGraphContainer
          tableData={t('stopping-earnings.accessibility', { returnObjects: true })}
          description={t('stopping-earnings.description')}
          buttonLabel={t('stopping-earnings.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />

        <h2 id="adding-oas" className="h2">
          {t('adding-oas.heading')}
        </h2>
        <p>
          <Trans ns="learn/case-studies/bonnie" i18nKey="adding-oas.p1" />
        </p>
        <p>
          <Trans
            ns="learn/case-studies/bonnie"
            i18nKey="adding-oas.p2"
            components={{
              a1: <MuiLink href={t('adding-oas.a1')} />,
            }}
          />
        </p>
        <Img pension="adding-oas" />
        <p className="mt-2 rounded-lg bg-gray-surface p-4">{t('adding-oas.p3')}</p>
        <AccessibilityGraphContainer
          tableData={t('adding-oas.accessibility', { returnObjects: true })}
          description={t('adding-oas.description')}
          buttonLabel={t('adding-oas.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />

        <h2 id="cpp" className="h2">
          {t('cpp.heading')}
        </h2>
        <p>{t('cpp.p1')}</p>
        <ul className="mb-2 ml-5 list-inside list-disc">
          <li>{t('cpp.li1')}</li>
          <li>{t('cpp.li2')}</li>
          <li>{t('cpp.li3')}</li>
        </ul>
        <Img pension="cpp" />
        <p className="mt-2 rounded-lg bg-gray-surface p-4">{t('cpp.p2')}</p>
        <AccessibilityGraphContainer
          tableData={t('cpp.accessibility', { returnObjects: true })}
          description={t('cpp.description')}
          buttonLabel={t('cpp.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('cpp.p3')}</p>

        <h2 id="own-savings" className="h2">
          {t('own-savings.heading')}
        </h2>
        <p>
          <Trans ns="learn/case-studies/bonnie" i18nKey="own-savings.p1" />
        </p>
        <Img pension="own-savings" />
        <p className="mt-2 rounded-lg bg-gray-surface p-4">
          <Trans ns="learn/case-studies/bonnie" i18nKey="own-savings.p2" />
        </p>
        <AccessibilityGraphContainer
          tableData={t('own-savings.accessibility', { returnObjects: true })}
          description={<Trans ns="learn/case-studies/bonnie" i18nKey="own-savings.description" />}
          buttonLabel={t('own-savings.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />

        <h2 id="early-pension" className="h2">
          {t('early-pension.heading')}
        </h2>
        <p>{t('early-pension.p1')}</p>
        <Img pension="early-pension" />

        <p className="mt-2 rounded-lg bg-gray-surface p-4">
          <Trans ns="learn/case-studies/bonnie" i18nKey="early-pension.p2" />
        </p>
        <AccessibilityGraphContainer
          tableData={t('early-pension.accessibility', { returnObjects: true })}
          description={<Trans ns="learn/case-studies/bonnie" i18nKey="early-pension.description" />}
          buttonLabel={t('early-pension.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />

        <h2 id="conclusion" className="h2">
          {t('conclusion.heading')}
        </h2>
        <p>
          <Trans ns="learn/case-studies/bonnie" i18nKey="conclusion.p1" />
        </p>
        <p>
          <Trans ns="learn/case-studies/bonnie" i18nKey="conclusion.p2" />
        </p>
        <p>{t('conclusion.p3')}</p>
        <p>{t('conclusion.p4')}</p>
        <p>{t('conclusion.p5')}</p>
        <AlertCard type="disclaimer">
          <Trans ns="learn/case-studies/bonnie" i18nKey="conclusion.disclaimer" />
        </AlertCard>

        <h2 id="learn-more" className="h2">
          {t('learn-more.header')}
        </h2>
        <List disablePadding>
          {learnMoreLinks.map(({ href, primary, secondary }) => (
            <Fragment key={primary}>
              <ListItem disablePadding className="border-b">
                <ListItemButton href={href} component={MuiLink}>
                  <ListItemText
                    primary={primary}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      className: 'font-display font-medium',
                      component: 'h3',
                    }}
                    secondary={secondary}
                  />
                  <NavigateNext color="primary" />
                </ListItemButton>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </LearnPageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'default', ['common', 'learn/case-studies/bonnie'], null, [
        'en',
        'fr',
      ])),
    },
  }
}

export default Bonnie
