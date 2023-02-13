import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const Mission = React.memo(() => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="stretch"
          spacing={5}
        >
          <Item>
            <Typography variant="h1" gutterBottom>
              We sell Books.
            </Typography>
          </Item>
          <Item>
            <Typography variant="subtitle1" gutterBottom>
              We are a locally owned independent bookshop committed to offering
              a quality selection of new and affordable bargain books, as well
              as gifts and educational items for customers of all ages and
              backgrounds.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We are passionate about the written word and seek to share our
              love of reading to help create and sustain a community of lifelong
              readers. We strive to provide a hospitable and nurturing
              environment to encourage the healthy exchange of ideas by hosting
              numerous readings, book groups, panel presentations, and on-line
              discussions.
            </Typography>
            <Typography variant="body2" gutterBottom>
              We are committed to engaging with the many diverse peoples and
              organizations of our community, particularly in Western
              AnotherPlace, but also on a national and international scale, to
              work towards the goals of a knowledgeable public and a peaceful
              and environmentally sustainable planet.
            </Typography>
          </Item>
          <Item>
            <Typography variant="overline" display="block" gutterBottom>
              Another Bookstore
            </Typography>
          </Item>
        </Stack>
      </Box>
    </Container>
  );
});
