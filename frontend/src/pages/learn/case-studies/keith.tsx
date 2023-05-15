import { FC, Fragment, useMemo } from 'react'

import { NavigateNext } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import AccessibilityGraphContainer from '../../../components/AccessibilityGraphContainer'
import AlertCard from '../../../components/AlertCard'
import { LearnPageLayout } from '../../../components/LearnPageLayout'
import theme from '../../../theme'
import { getDCTermsTitle } from '../../../utils/seo-utils'

const Keith: FC = () => {
  const { t, i18n } = useTranslation('learn/case-studies/keith')
  const en = i18n.getFixedT('en', 'learn/case-studies/keith')
  const fr = i18n.getFixedT('fr', 'learn/case-studies/keith')

  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const learnMoreLinks = useMemo(
    () => [
      {
        href: '/learn/going-from-work-to-retirement',
        primary: t('learn-more.going-from-work-to-retirement.header'),
        secondary: t('learn-more.going-from-work-to-retirement.description'),
      },
      {
        href: '/learn/rules-of-thumb-for-public-pensions',
        primary: t('learn-more.rules-of-thumb-for-public-pensions.header'),
        secondary: t('learn-more.rules-of-thumb-for-public-pensions.description'),
      },
      {
        href: t('learn-more.cpp-prb.href'),
        primary: t('learn-more.cpp-prb.header'),
        secondary: t('learn-more.cpp-prb.description'),
      },
    ],
    [t]
  )

  const Img = ({ pension, classes }: { pension: string, classes?: string }) => (
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
              primaryI18nKey: 'key-takeaways.li1',
              secondaryI18nKey: 'key-takeaways.li2',
            },
            {
              primaryI18nKey: 'key-takeaways.li3',
            },
            {
              primaryI18nKey: 'key-takeaways.li4',
              secondaryI18nKey: 'key-takeaways.li5',
            },
            {
              primaryI18nKey: 'key-takeaways.li6',
            },
          ].map(({ primaryI18nKey, secondaryI18nKey }) => (
            <ListItem key={primaryI18nKey} disablePadding className="border-b py-2">
              <ListItemText
                primary={t(primaryI18nKey)}
                primaryTypographyProps={{ className: 'font-medium text-base md:text-xl font-display' }}
                secondary={secondaryI18nKey ? t(secondaryI18nKey): null}
                secondaryTypographyProps={{ className: 'text-base' }}
              />
            </ListItem>
          ))}
        </List>

        <h2 id="overview" className="h2">
          {t('overview.heading')}
        </h2>
        <p>{t('overview.p1')}</p>

        <h2 id="how-did-keith" className="h2">
          {t('cpp-oas.heading')}
        </h2>
        <p>{t('cpp-oas.p1')}</p>
        <p>{t('cpp-oas.p2')}
          <Link
            href={t('cpp-oas.oas-benefits.href')}
            className='underline text-secondary-700'>
            {t('cpp-oas.oas-benefits.text')}
          </Link>
        </p>
        
        <h2 id="prb" className="h2">
          {t('cpp.prb.heading')}
        </h2>
        <p>{t('cpp.prb.p1')} 
        <Link
            href={t('cpp.prb.cpp-post.href')}
            className='underline text-secondary-700'>
            {t('cpp.prb.cpp-post.text')}
          </Link>
          {t('cpp.prb.p2')} 
        </p>

        <h2 id="prb-choices" className="h2">
          {t('cpp.prb-choices.heading')}
        </h2>
        <p><Trans ns="learn/case-studies/fred" i18nKey={t(`cpp.prb-choices.list.li1`)} /></p>
        <p><Trans ns="learn/case-studies/fred" i18nKey={t(`cpp.prb-choices.list.li2`)} /></p>
        <p><Trans ns="learn/case-studies/fred" i18nKey={t(`cpp.prb-choices.list.li3`)} /></p>
        <p><Trans ns="learn/case-studies/fred" i18nKey={t(`cpp.prb-choices.list.li4`)} /></p>

        <h2 id="cpp-choices" className="h2">
          {t('cpp.cpp-choices.heading')}
        </h2>
        <Img pension="cpp.cpp-choices" />
        <div className='grid md:grid-cols-2 grid-cols-1 text-center py-4'>
          <div>
            <p>{t('cpp.cpp-choices.choices.li1')}</p>
            <p>{t('cpp.cpp-choices.choices.li2')}</p>
          </div>
          <div>
            <p>{t('cpp.cpp-choices.choices.li3')}</p>
            <p>{t('cpp.cpp-choices.choices.li4')}</p>
          </div>
        </div>
        <AccessibilityGraphContainer
          tableData={t('cpp.cpp-choices.accessibility', { returnObjects: true })}
          description={t('cpp.cpp-choices.description')}
          buttonLabel={t('cpp.cpp-choices.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('cpp.cpp-choices.p1')}</p>
        <p>{t('cpp.cpp-choices.p2')}</p>

        <h2 id="what-else" className="h2">
          {t('cpp.what-else.heading')}
        </h2>
        <p>{t('cpp.what-else.p1')}</p>
        <List disablePadding className='text-black pl-6 pb-4' sx={{ listStyleType: 'disc'}}>
          {[
            {
              primaryI18nKey: 'cpp.what-else.list.li1',
            },
            {
              primaryI18nKey: 'cpp.what-else.list.li2',
            },
          ].map(({ primaryI18nKey }) => (
            <ListItem key={primaryI18nKey} sx={{ display: 'list-item' }} disablePadding>
              <ListItemText
                primary={t(primaryI18nKey)}
              />
            </ListItem>
          ))}
        </List>

        <p>{t('cpp.what-else.p2')}</p>
        <AlertCard type="tip">
          <Trans ns="learn/case-studies/keith" 
          i18nKey="cpp.what-else.smart-tip.content"
          components={{
            a1: <a className="underline text-secondary-700" href={t('cpp.what-else.smart-tip.link-one')} />,
            a2: <a className="underline text-secondary-700" href={t('cpp.what-else.smart-tip.link-two')} />,
          }} />
        </AlertCard>

        <h2 id="keith-pension-87" className="h2">
          {t('cpp.keith-pension-87.heading')}
        </h2>
        <p>{t('cpp.keith-pension-87.p1')}</p>
        <p><Trans ns="learn/case-studies/fred" i18nKey={t(`cpp.keith-pension-87.p2`)} /></p>
        <p><Trans ns="learn/case-studies/fred" i18nKey={t(`cpp.keith-pension-87.p3`)} /></p>
        <Img pension="cpp.keith-pension-87" />
        <div className='grid md:grid-cols-2 grid-cols-1 text-center py-4'>
          <div>
            <p>{t('cpp.keith-pension-87.choices.li1')}</p>
            <p>{t('cpp.keith-pension-87.choices.li2')}</p>
          </div>
          <div>
            <p>{t('cpp.keith-pension-87.choices.li3')}</p>
            <p>{t('cpp.keith-pension-87.choices.li4')}</p>
          </div>
        </div>
        <AccessibilityGraphContainer
          tableData={t('cpp.keith-pension-87.accessibility', { returnObjects: true })}
          description={t('cpp.keith-pension-87.description')}
          buttonLabel={t('cpp.keith-pension-87.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('cpp.keith-pension-87.p4')}</p>

        <h2 id="keith-pension-90" className="h2">
          {t('cpp.keith-pension-90.heading')}
        </h2>
        <p>{t('cpp.keith-pension-90.p1')}</p>
        <Img pension="cpp.keith-pension-90" />
        <div className='grid md:grid-cols-2 grid-cols-1 text-center py-4'>
          <div>
            <p>{t('cpp.keith-pension-90.choices.li1')}</p>
            <p>{t('cpp.keith-pension-90.choices.li2')}</p>
          </div>
          <div>
            <p>{t('cpp.keith-pension-90.choices.li3')}</p>
            <p>{t('cpp.keith-pension-90.choices.li4')}</p>
          </div>
        </div>
        <AccessibilityGraphContainer
          tableData={t('cpp.keith-pension-90.accessibility', { returnObjects: true })}
          description={t('cpp.keith-pension-90.description')}
          buttonLabel={t('cpp.keith-pension-90.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('cpp.keith-pension-90.p4')}</p>

        <h2 id="oas" className="h2">
          {t('oas.heading')}
        </h2>
        <p>{t('oas.p1')} 
        <Link
            href={t('oas.gis.href')}
            className='underline text-secondary-700'>
            {t('oas.gis.text')}
          </Link>
          {t('oas.p2')}
          <Link
            href={t('oas.low-income.href')}
            className='underline text-secondary-700'>
            {t('oas.low-income.text')}
          </Link>
        </p>
        <p>{t('oas.p3')}</p>
        <p>{t('oas.p4')} 
        <Link
            href={t('oas.fred-story.href')}
            className='underline text-secondary-700'>
            {t('oas.fred-story.text')}
          </Link>
        </p>
        <AlertCard type="disclaimer">
          <Trans ns="learn/case-studies/keith" i18nKey="oas.disclaimer" />
        </AlertCard>

        <h2 id="learn-more" className="h2">
          {t('learn-more.header')}
        </h2>
        <List disablePadding>
          {learnMoreLinks.map(({ href, primary, secondary }) => (
            <Fragment key={primary}>
              <ListItem disablePadding className="border-b">
                <ListItemButton href={href} component={Link}>
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
      ...(await serverSideTranslations(locale ?? 'default', ['common', 'learn/case-studies/keith'], null, ['en', 'fr'])),
    },
  }
}

export default Keith